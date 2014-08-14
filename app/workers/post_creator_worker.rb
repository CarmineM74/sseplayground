class PostCreatorWorker
  include Sidekiq::Worker
  include Sidetiq::Schedulable

  recurrence { minutely 3 }

  def perform(last_occurrence, current_occurrence)
    post = Post.new(message: "Posted at #{current_occurrence}")
    if post.save
      Redis.current.publish('posts.create', post.to_json)
    end
  end

end
