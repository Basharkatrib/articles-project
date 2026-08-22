import { Link } from "react-router";

function Home() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-8">
            <div className="max-w-2xl text-center">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
                    Welcome to Articles
                </h1>
                <p className="text-gray-500 text-lg mb-8">
                    A simple space to read, write, and explore ideas — essays, thoughts, and technical writings all in one place.
                </p>
                <Link
                    to="/articles"
                    className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Browse Articles
                </Link>
            </div>
        </div>
    );
}

export default Home;