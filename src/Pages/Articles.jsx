import { useEffect, useState } from 'react';
import ArticleCard from '../Componnents/ArticleCard'
import axios from 'axios';
import { Link } from 'react-router';
import { useAuth } from '../context/AuthContext';

function Articles() {


  const [isLoading, setIsloading] = useState(true);
  const [isError, setIsError] = useState(null);

  const [articles, setArticle] = useState([]);
  const {user} = useAuth();

  

  useEffect(() => {
    async function getData() {
      try {
        setIsloading(true)
        const response = await axios.get("http://127.0.0.1:8000/api/articles");
        setArticle(response.data);
      } catch (err) {
        setIsError("There is an Error unexpected");
      } finally {
        setIsloading(false);
      }
    }
    getData();
  }, [])

  if (isLoading) {
    return <p>Loading......</p>
  }

  if (isError) {
    return <p>{isError}</p>
  }

  const handleDelete = (id) => {
       setArticle(articles.filter(article => article.id !== id))
  }


  return (
    <div className="min-h-screen bg-gray-50 px-8 py-10">
      {/* Header */}
      <div className=" mx-auto mb-10 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Articles</h1>
          <p className="text-gray-500">Explore our collection of essays, thoughts, and technical writings.</p>
        </div>
        {
          user ? (
        <Link className='bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors' to={"/add"} >+ Add Article</Link>
          ):
          (<></>)
        }
      </div>

      {/* Grid */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map(article => (
          <ArticleCard
            key={article.id}
            id={article.id}
            title={article.title}
            body={article.body}
            userId={article.user_id}
            image={article.image}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  )
}

export default Articles;