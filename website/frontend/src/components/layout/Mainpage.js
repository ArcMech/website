import React, { useState, useEffect } from "react";
import axios from "axios";
import Hero from "./Hero";
import About from "./About";
import Lastposts from "./Lastposts";

const Mainpage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://127.0.0.1:8000/api/posts/").then();
      setPosts(res.data);
    };

    fetchPosts();
  }, []);

  const lastThree = setPosts.length - 4;
  const threePosts = posts.slice(lastThree);

  return (
    <div>
      <Hero />
      <About />
      <br />
      <Lastposts posts={threePosts} />
    </div>
  );
};

export default Mainpage;
