class PdfCreatorWorker
  include Sidekiq::Worker
  include Sidetiq::Schedulable

  recurrence { minutely 5 }

  def perform(last_occurrence, current_occurrence)
    posts = Post.all
    pdf = PostsListPdf.new(posts)
    pdf.body
    pdf.save('./public/posts.pdf')
    Redis.current.publish('posts.pdf', 'posts.pdf')
  end

end

