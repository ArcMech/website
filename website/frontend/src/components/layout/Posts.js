import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "../styles/posts.module.css";
import Button from "./Button";
import ReactMarkdown from "react-markdown";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2 className={styles.center}>Loading...</h2>;
  }
  return (
    <div className={styles.box}>
      <Container>
        {posts.map(post => (
          <Row key={post.id}>
            <div className={styles.item}>
              <Col sm={12} md={12} lg={6} xs={12}>
                <div className={styles.item_image}>
                  <Image
                    fluid={true}
                    src={post.post_image}
                    alt={post.post_image_alt}
                  />
                </div>
              </Col>
              <Col sm={12} md={12} lg={6} xs={12}>
                <div className={styles.item_text}>
                  <p className={styles.small}>{post.timestamp}</p>
                  <h1 className={styles.title}>{post.title}</h1>
                  <div className={styles.overview}>
                    <ReactMarkdown source={post.overview} />
                  </div>

                  <Link to={"blog/" + post.id}>
                    <Button>Read more</Button>
                  </Link>
                </div>
              </Col>
            </div>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default Posts;
