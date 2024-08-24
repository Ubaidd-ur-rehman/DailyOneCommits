import React from "react";
function Post({ post }) {
  return (
    <div className="container mx-auto p-4 w-full h-auto">
      <div className="bg-yellow-100 shadow-md rounded-lg p-6 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
        <p className="text-gray-700 text-base leading-relaxed">{post.body}</p>
      </div>
    </div>
  );
}

export default Post;
