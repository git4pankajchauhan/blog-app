import { Add } from '@material-ui/icons';
import CustomButton from 'components/Button/CustomButton';
import CustomDrawer from 'components/Drawer/CustomDrawer';
import { CustomInput, CustomTextArea } from 'components/Input/CustomInput';
import themes from 'themes/themes';
import React, { useState } from 'react';
import './Posts.scss';
import SingleItem from './SingleItem';

const Posts = () => {
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

  const formSubmit = e => {
    e.preventDefault();
    const { title, sub_title, tags, content } = addPost;
    console.log(`title : ${title}\sub_title : ${sub_title}\tags : ${tags}\content : ${content}`);
  };

  return (
    <section className="post-section">
      <div className="head">
        <span className="head-title">Posts </span>
        <div className="l-wrap">
          <CustomDrawer btnText="Create New Post" icon={<Add />} label="Edit Profile">
            <form action="" method="post" onSubmit={formSubmit}>
              <CustomInput type="text" name="title" onChange={inputChange} placeholder="Enter Title" />
              <CustomInput type="text" name="sub_title" onChange={inputChange} placeholder="Enter Sub Title" />
              <CustomInput type="text" name="tags" onChange={inputChange} placeholder="Enter Tags" />
              <CustomTextArea type="text" name="content" onChange={inputChange} placeholder="Enter Content" />
              <CustomButton color={themes.colors.success}>Submit</CustomButton>
            </form>
          </CustomDrawer>
          <span className="user">Hi, Pankaj</span>
        </div>
      </div>
      <div className="body">
        <div className="filter-wrap">
          <input type="text" className="filter-post" placeholder="Search by tags..." />
        </div>
        <div className="post-container">
          <SingleItem tags="Hello" title="Main Title Post" sub_title="Sub title post " />
        </div>
      </div>
    </section>
  );
};

export default Posts;
