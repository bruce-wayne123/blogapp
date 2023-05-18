import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import firestore from "../firebase";
import styled from "styled-components";
const Blogheading = styled.h1`
  text-align: center;
  color: #2196f3;
  margin-bottom: 2px;
`;

const PostSubtitle = styled.p`
font-size: 13px;
`;
const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    firestore.collection("posts").get().then((snapshot) => {
      const posts = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      });
      setPosts(posts);
    });

  }, []);

  return (
    <div className='home'>
      <button className='createPostBtn'>Test</button>
      <Blogheading>Tech blogs</Blogheading>
      <div id='blog-by'>Ankush</div>
      {
        posts.map((post, index) => (
          <div key={`{post-${index}}`} className='post'>
            <Link to={`/post/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
            <PostSubtitle>{post.subTitle}</PostSubtitle>
          </div>
        ))
      }
    </div>
  );
}

const styles = {
  heading: {
    marginTop: 30,
    fontSize: 56
  }
}

export default Home;