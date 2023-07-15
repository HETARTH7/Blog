const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

const uri = "mongodb://localhost:27017/blogDB";
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Database has connected succesfully");
});

const postsSchema = new mongoose.Schema({ title: String, post: String });
const Post = new mongoose.model("Post", postsSchema);

app.get("/", (req, res) => {
  Post.find()
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json("Error:" + err));
});

app.post("/add", (req, res) => {
  const title = req.body.title;
  const post = req.body.post;
  const newPost = new Post({ title, post });
  newPost
    .save()
    .then(() => res.json("Post added"))
    .catch((err) => res.status(400).json("Error:" + err));
});

app.post("/delete/:id", (req, res) => {
  const id = req.params.id;
  Post.findByIdAndDelete(id)
    .then(() => res.json("Blog deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
