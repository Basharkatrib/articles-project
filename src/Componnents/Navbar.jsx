import { NavLink, Link } from "react-router";

function Navbar() {

    return (
        <nav className="bg-white border-b border-gray-100 px-8 py-4 flex justify-between items-center sticky top-0 z-10">
            <Link to="/" className="text-xl font-extrabold text-gray-900">
                ArticleWebsite
            </Link>
            <div className="flex gap-6 items-center">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/articles">Articles</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink
                    to="/add"
                    className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    + Add Article
                </NavLink>
            </div>
        </nav>
    );
}
export default Navbar;