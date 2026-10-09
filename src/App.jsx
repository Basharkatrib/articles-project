import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './Pages/Home';
import About from './Pages/About';
import Navbar from './Componnents/Navbar'
import Articles from './Pages/Articles';
import AddArticle from './Pages/AddArticle';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleDetails from './Pages/ArticleDetails';
import Register from './Pages/Register';
import Login from './Pages/Login';

function App() {

  const [isLoading, setIsloading] = useState(true);
  const [isError, setIsError] = useState(null);

  const [articles, setArticle] = useState([
          {
              id: 1,
              title: "Article 1",
              content: "Imagine this: Two days before your family holiday party, you get a text about an online order you placed a week ago, saying the package is at your door. It comes with a photo – of someone else’s door. When you click the attached link, it takes you to the online store",
              image: "https://images.unsplash.com/photo-1624269305548-1527ef905ff6?q=80&w=642&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              author: "Raneem"
          },
          {
              id: 2,
              title: "Article 1",
              content: "Imagine this: Two days before your family holiday party, you get a text about an online order you placed a week ago, saying the package is at your door. It comes with a photo – of someone else’s door. When you click the attached link, it takes you to the online store",
              image: "https://images.unsplash.com/photo-1624269305548-1527ef905ff6?q=80&w=642&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              author: "Raneem"
          },
          {
              id: 3,
              title: "Article 1",
              content: "Imagine this: Two days before your family holiday party, you get a text about an online order you placed a week ago, saying the package is at your door. It comes with a photo – of someone else’s door. When you click the attached link, it takes you to the online store",
              image: "https://images.unsplash.com/photo-1624269305548-1527ef905ff6?q=80&w=642&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              author: "Raneem"
          },
          
      ]);

      const addArticle = (newArticle) => {
        setArticle([...articles, newArticle])
      }

      useEffect(()=>{
       async function getData(){
          try{
            setIsloading(true)
            const response = await axios.get("http://127.0.0.1:8000/api/articles");
            setArticle(response.data);
          }catch(err){
            setIsError("There is an Error unexpected");
          }finally{
            setIsloading(false);
          }
        }
        getData();
      },[])

      if(isLoading){
        return <p>Loading......</p>
      }

      if(isError){
        return <p>{isError}</p>
      }

      function handleDelete(articleId){
        const updatedArticle = articles.filter((article) => article.id !== articleId);
        setArticle(updatedArticle)
      }


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles  articles={articles} handleDelete={handleDelete}/>} />
        <Route path="/article/:id" element={<ArticleDetails />} />
        <Route path="/add" element={<AddArticle onAdd={addArticle} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>

  );
}

export default App
