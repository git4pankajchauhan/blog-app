import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Posts.scss';
import SingleItem from './SingleItem';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');

  /* Fetch posts From API */
  const postsData = async search => {
    const postdata = await Axios.get(`http://localhost:8000/post/${search}`);
    setPosts(postdata.data);
  };
  useEffect(() => {
    postsData(search);
  }, [search]);

  return (
    <section className="post-section">
      <div className="body">
        <div className="filter-wrap">
          <input type="text" className="filter-post" onChange={e => setSearch(e.target.value)} value={search} placeholder="Search by tags..." />
        </div>
        <div className="post-container">
          {posts.map(item => {
            return <SingleItem getPost={postsData} key={item._id} id={item._id} tags={item.tags} sub_title={item.sub_title} title={item.title} content={item.content} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Posts;
