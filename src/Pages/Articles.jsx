import ArticleCard from '../Componnents/ArticleCard'

function Articles({ articles, handleDelete }) {
  return (
    <div className="min-h-screen bg-gray-50 px-8 py-10">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Articles</h1>
        <p className="text-gray-500">Explore our collection of essays, thoughts, and technical writings.</p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map(article => (
          <ArticleCard
            key={article.id}
            id={article.id}
            title={article.title}
            body={article.body}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  )
}

export default Articles;