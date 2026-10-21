import { use, useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

function EditArticle(){
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [loading, setLoading] = useState(false);
    const [loadingu, setLoadingu] = useState(false);
    const [error, setError] = useState("");
    const [erroru, setErroru] = useState("");
    const { token } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
    async function getData() {
      try {
        setLoading(true)
        const response = await axios.get(`http://127.0.0.1:8000/api/articles/${id}`);
        console.log(response.data);
        setTitle(response.data.title);
        setBody(response.data.body);
      } catch (err) {
        setError("There is an Error unexpected");
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  const handleUpdate = async (e) => {
      e.preventDefault();

      if(title === "" || body === ""){
        alert("You should fill all fields");
            return;
      }

      try{
        setLoadingu(true);
        const response = await axios.put(`http://127.0.0.1:8000/api/update/${id}`,{
            title : title,
            body : body
        },
        {
            headers :{
                Authorization: `Bearer ${token}`
            }
        }
    );
    console.log(response);
    navigate('/articles');


      }catch(err){
        setErroru("Error..")

      }finally{
        setLoadingu(false);
        setTitle("");
        setBody("");
      }
  }

  if(loading){
    return <p>Loading..</p>
  }

    return(
        <div className="min-h-screen bg-gray-50 px-8 py-10">
            <div className="max-w-xl mx-auto">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
                    Update Article
                </h1>

                <form
                    onSubmit={handleUpdate}
                    className="bg-white border border-gray-100 shadow-sm rounded-xl p-8 flex flex-col gap-4"
                >
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Title
                        </label>
                        <input
                            type="text"
                            placeholder="Enter the title..."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full border border-gray-200 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Content
                        </label>
                        <textarea
                            placeholder="Enter the content..."
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            rows={5}
                            className="w-full border border-gray-200 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 text-white font-medium py-2.5 rounded-lg hover:bg-blue-700 transition-colors mt-2"
                    >
                        {loadingu? 'Update...' : 'Update' }
                    </button>
                </form>
            </div>
        </div>
    )
}
export default EditArticle;