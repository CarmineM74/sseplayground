class StreamsController < ApplicationController
  include ActionController::Live

  def stream
    response.headers['Content-Type'] = "text/event-stream"
    sse = SSE.new(response.stream)
    redis = Redis.new
    redis.psubscribe('posts.*') do |on|
      on.psubscribe do |evt, total|
        Rails.logger.info "Subscribed to #{evt} total: #{total}"
      end
      on.pmessage do |pattern,evt,data|
        Rails.logger.info "Notification: Pattern: #{pattern} evt: #{evt} data: #{data}"
        sse.write(data, event: evt)
      end
    end
  rescue IOError
    # Client disconnected
  ensure
    redis.quit
    sse.close
  end

end
