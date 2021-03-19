import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleItem.scss';
import Axios from 'axios';

const SinglePost = () => {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();

  // Get Single Post Details
  const postsData = async () => {
    const postdata = await Axios.get(`http://localhost:8000/post/getsingle/${id}`);
    setPosts(postdata.data);
  };
  useEffect(() => {
    postsData();
  }, []);
  return (
    <section className="spost-section">
      <div className="post-box">
        <div className="post-info">
          <span className="tags">{posts.tags}</span>
          <h2 className="title">{posts.title}</h2>
          <p className="sub-title">{posts.sub_title}</p>
          <p className="description">{posts.content}</p>
        </div>
      </div>
    </section>
  );
};

export default SinglePost;
