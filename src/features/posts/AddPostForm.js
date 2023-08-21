import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);

  const onSavePostClick = (e) => {
    if (title && content) {
      dispatch(postAdded(title, content));
      setTitle("");
      setContent("");
    }
  };
  return (
    <div>
      <h2>Add new post</h2>
      <form>
        <label>Post Title</label>
        <input onChange={onTitleChange} />
        <label>Content</label>
        <textarea onChange={onContentChange} />
        <button type="button" onClick={onSavePostClick}>
          Save post
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;
