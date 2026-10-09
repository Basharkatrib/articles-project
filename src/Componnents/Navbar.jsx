import { NavLink, Link } from "react-router";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

function Navbar() {

    const { user, token, logout } = useAuth();

    const handleLogout = async () => {
        try{
            const response = await axios.post("http://127.0.0.1:8000/api/logout",
                {},
                {
                  headers : {
                    Authorization : `Bearer ${token}`
                  }  
                }
            )
        }catch(err){
            console.log(err)
        }
        logout();
    }

    return (
        <nav className="bg-white border-b border-gray-100 px-8 py-4 flex justify-between items-center sticky top-0 z-10">
            <Link to="/" className="text-xl font-extrabold text-gray-900">
                ArticleWebsite
            </Link>
            <div className="flex gap-6 items-center">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/articles">Articles</NavLink>
                <NavLink to="/about">About</NavLink>
                {
                    user ? (
                        <div className="flex gap-3 items-center">
                            <p>{user.email}</p>
                            <button onClick={handleLogout} className="bg-red-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">Logout</button>
                        </div>
                    ) : (
                        <div className="flex gap-3 items-center">
                            <NavLink
                                to="/register"
                                className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Register
                            </NavLink>
                            <NavLink
                                to="/login"
                                className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Login
                            </NavLink>
                        </div>
                    )
                }

            </div>
        </nav>
    );
}
export default Navbar;