import React, { useState } from "react";
import axios from "axios";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangePost = (e) => {
    setPost(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title: title,
      post: post,
    };
    axios
      .post("http://localhost:5000/add", newPost)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setTitle("");
    setPost("");
    window.location = "/view";
  };
  return (
    <form onSubmit={onSubmit} className="container">
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input onChange={onChangeTitle} className="form-control"></input>
      </div>
      <div className="mb-3">
        <label className="form-label">Write Post</label>
        <textarea
          onChange={onChangePost}
          className="form-control"
          rows="15"
        ></textarea>
      </div>
      <button type="submit">POST</button>
    </form>
  );
};
export default CreatePost;
