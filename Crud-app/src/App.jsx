import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Post from "./pages/Post";
import PostList from "./pages/PostList";
import { useState } from "react";
import PostForm from "./Components/PostForm";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <>
      <Routes>
        <Route path="/post/:id" element={<Post />}></Route>
        <Route path="/" element={<PostForm />}></Route>
        <Route path="/post/:id/edit" element={<EditPost />}></Route>
        <Route path="/PostList" element={<PostList />}></Route>
      </Routes>
    </>
  );
}

export default App;
