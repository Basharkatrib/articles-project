import axios from "axios";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();


    const {login} = useAuth();

    const handleSubmit = async (e) => {
          e.preventDefault();

          if(email==="" || password === ""){
            setError("Please fill all fields !");
            return ;
          }

          if(password.length < 8){
            setError("Uncorrect password !!");
            return ;
          }

          try{
            setLoading(true);
            const response = await axios.post("http://127.0.0.1:8000/api/login",{
                email:email,
                password:password
            });
            
            login(response.data.user , response.data.token);
            navigate("/")
          }catch(err){
            setError(err.response.data.message);
          }finally{
            setLoading(false);
          }
    }

    return (
        <div className="flex justify-center items-center">
            <form onSubmit={handleSubmit} className="flex flex-col border border-blue-400 rounded w-1/2 justify-center items-center p-4 gap-3">
                <h1 className="">Welcome Back</h1>
                <input className="border border-blue-500 w-full p-2 rounded" type="email" placeholder="Enter your email.." value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input className="border border-blue-500 w-full p-2 rounded" type="password" placeholder="Enter your password.." value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button className="w-full bg-blue-700 text-white p-2 rounded">{loading? 'Login...' : 'Login'}</button>
                {error && <p className="text-red-500">{error}</p>}
            </form>
        </div>


    );
}
export default Login;