import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";

function ArticleDetails() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                setIsLoading(true);
                const response = await axios.get(`http://127.0.0.1:8000/api/articles/${id}`);
                setArticle(response.data);
            } catch (error) {
                setError("There is an error");
            } finally {
                setIsLoading(false);
            }
        }
        getData();
    }, [id])

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <p className="text-gray-400">Loading....</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <p className="text-red-500">{error}</p>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 px-8 py-10">
            <div className="max-w-3xl mx-auto">
                <Link to="/articles" className="text-blue-600 text-sm font-medium hover:underline">
                    ← Back to Articles
                </Link>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mt-6">
                    <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
                        {article.title}
                    </h1>
                    <p className="text-gray-600 leading-relaxed">
                        {article.body}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ArticleDetails;