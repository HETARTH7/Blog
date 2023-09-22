import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const users = useSelector(selectAllUsers);
  const dispatch = useDispatch();
  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onAuthorChange = (e) => setUserId(e.target.value);

  const onSavePostClick = (e) => {
    if (title && content) {
      dispatch(postAdded(title, content,userId));
      setTitle("");
      setContent("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
  return (
    <div>
      <h2>Add new post</h2>
      <form>
        <label>Post Title</label>
        <input onChange={onTitleChange} />
        <label>Author</label>
        <select onChange={onAuthorChange}>
          <option>Select author</option>
          {users.map((user) => {
            return (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            );
          })}
        </select>
        <label>Content</label>
        <textarea onChange={onContentChange} />
        <button disabled={!canSave} type="button" onClick={onSavePostClick}>
          Save post
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;
