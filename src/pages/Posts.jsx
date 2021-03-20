import { Add } from '@material-ui/icons';
import Axios from 'axios';
import CustomButton from 'components/Button/CustomButton';
import CustomDrawer from 'components/Drawer/CustomDrawer';
import { CustomInput, CustomTextArea } from 'components/Input/CustomInput';
import SingleItem from 'components/Post/SingleItem';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import themes from 'themes/themes';
import './Posts.scss';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');

  const [message, setMessage] = useState('');
  const [addPost, setAddPost] = useState({
    title: '',
    sub_title: '',
    tags: '',
    content: '',
  });

  const inputChange = e => {
    const { name, value } = e.target;
    setAddPost(preVal => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = async e => {
    e.preventDefault();
    const result = await Axios.post('http://localhost:8000/post', addPost);
    if (result.data.status) {
      postsData('');
      setMessage(result.data.message);
      setTimeout(() => {
        setMessage(false);
      }, 3000);
    } else {
      setMessage(result.data.message);
    }
  };

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
          <CustomDrawer btnText="Create New Post" icon={<Add />} label="Edit Profile">
            <form action="" method="post" onSubmit={formSubmit}>
              <CustomInput type="text" name="title" onChange={inputChange} placeholder="Enter Title" />
              <CustomInput type="text" name="sub_title" onChange={inputChange} placeholder="Enter Sub Title" />
              <CustomInput type="text" name="tags" onChange={inputChange} placeholder="Enter Tags" />
              <CustomTextArea type="text" name="content" onChange={inputChange} placeholder="Enter Content" />
              {message && <div className="message">{message}</div>}
              <CustomButton color={themes.colors.success}>Submit</CustomButton>
            </form>
          </CustomDrawer>
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

export default withRouter(Posts);
