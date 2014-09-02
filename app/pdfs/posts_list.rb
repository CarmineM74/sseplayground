class PostsListPdf
  def initialize(posts)
    @pdf = Prawn::Document.new
    @pdf.define_grid(columns: 24, rows: 24, gutter: 0)
    @data = [["User","Message","At"]]
    posts.each do |post|
      @data << [post.user.email,post.message,post.created_at.to_s]
    end
  end

  def body
    @pdf.table(@data, header: true)
  end

  def save(fname)
    @pdf.render_file(fname)
  end

end
