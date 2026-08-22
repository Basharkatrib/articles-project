import { useState } from "react";

function AddArticle({ onAdd }) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim() || !body.trim()) {
            alert("You should fill all fields");
            return;
        }

        onAdd({
            id: Date.now(),
            title: title,
            body: body,
        });

        setTitle("");
        setBody("");
    };

    return (
        <div className="min-h-screen bg-gray-50 px-8 py-10">
            <div className="max-w-xl mx-auto">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
                    Add New Article
                </h1>

                <form
                    onSubmit={handleSubmit}
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
                        Publish Article
                    </button>
                </form>
            </div>
        </div>
    );
}
export default AddArticle;