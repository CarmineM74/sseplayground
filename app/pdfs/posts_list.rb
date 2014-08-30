class PostsListPdf < Prawn::Document
  def initialize(posts)
    super
    define_grid(columns: 24, rows: 24, gutter: 0)
  end
end
