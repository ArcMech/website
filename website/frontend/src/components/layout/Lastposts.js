import React from "react";
// import axios from "axios";
// import { useEffect, useState } from "react";
import styles from "../styles/lastposts.module.css";
import Button from "./Button";
import { Link } from "react-router-dom";

const Lastposts = ({ posts }) => {
  return (
    <section className={styles.lastposts}>
      <h1>Ostatnie posty:</h1>
      {posts.map((post, id) => (
        <div className={styles.posts} key={post.id}>
          <div
            className={styles.post + (id === 1 ? " even" : "")}
            key={post.id}
          >
            <div className={styles.post_text}>
              <h4>React, Stuff</h4>
              <h2>{post.title}</h2>
              <p>{post.overview}</p>
              <Link to={"/blog/" + post.id}>
                <Button>read more</Button>
              </Link>
            </div>
            <div className={styles.post_img}>
              <img src={post.post_image} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Lastposts;
