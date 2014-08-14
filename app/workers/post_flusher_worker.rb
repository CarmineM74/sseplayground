class PostFlusherWorker
  include Sidekiq::Worker
  include Sidetiq::Schedulable

  recurrence { minutely 10 }

  def perform(last_occurrence, current_occurrence)
    Post.destroy_all
    Redis.current.publish('posts.flush', '')
  end
end
