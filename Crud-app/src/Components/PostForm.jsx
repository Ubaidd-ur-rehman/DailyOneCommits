import React, { useState } from "react";
import Post from "../pages/Post";
function PostForm() {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const RenderFieldInput = (label) => (
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2">{label}</label>
      <input
        type="text"
        onChange={handleChange}
        name={label.toLowerCase()}
        value={post[label.toLowerCase()]}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 border border-gray-200 rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        {RenderFieldInput("Title")}
        {RenderFieldInput("Body")}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
      {submitted && <Post post={post} />}
    </div>
  );
}

export default PostForm;
