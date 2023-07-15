import React from "react";
import Home from "./Home";
import Navbar from "./Navabar";
import Blog from "./Blog";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreatePost from "./CreatePost";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view" element={<Blog />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};
export default App;
