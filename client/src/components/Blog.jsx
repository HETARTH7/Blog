import React, { useEffect, useState } from "react";
import axios from "axios";

const Blog = () => {
  const [postItem, setPostItem] = useState([]);

  function deletePost(id) {
    axios
      .post(`http://localhost:5000/delete/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setPostItem((prevPosts) => {
      return prevPosts.filter((index) => {
        return index._id !== id;
      });
    });
  }

  const BlogPost = (props) => {
    return (
      <div>
        <h1>{props.newPost.title}</h1>
        <p>{props.newPost.post}</p>
        <button
          onClick={() => {
            deletePost(props.newPost._id);
          }}
        >
          DELETE
        </button>
      </div>
    );
  };

  const viewPosts = () => {
    return postItem.map((y, index) => {
      return <BlogPost key={index} newPost={y} />;
    });
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((res) => {
        setPostItem(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div>{viewPosts()}</div>
    </div>
  );
};
export default Blog;
