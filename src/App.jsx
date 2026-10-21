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
import EditArticle from './Pages/EditArticle';

function App() {

  

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article/:id" element={<ArticleDetails />} />
        <Route path="/add" element={<AddArticle />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/edit/:id" element={<EditArticle />} />
      </Routes>
    </div>

  );
}

export default App
