import { Delete } from '@material-ui/icons';
import CustomButton from 'components/Button/CustomButton';
import CustomDrawer from 'components/Drawer/CustomDrawer';
import { CustomInput, CustomTextArea } from 'components/Input/CustomInput';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import themes from 'themes/themes';
import './SingleItem.scss';

const SingleItem = ({ id, tags, title, sub_title }) => {
  const [editPost, setEditPost] = useState({
    title: '',
    sub_title: '',
    tags: '',
    content: '',
  });

  const editInputChange = e => {
    const { name, value } = e.target;
    setEditPost(preVal => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const editformSubmit = e => {
    e.preventDefault();
    const { title, sub_title, tags, content } = editPost;
    console.log(`title : ${title}\sub_title : ${sub_title}\tags : ${tags}\content : ${content}`);
  };
  return (
    <div className="post-box">
      <div className="post-info">
        <span className="tags">{tags}</span>
        <h2 className="title">{title}</h2>
        <p className="sub-title">{sub_title}</p>
      </div>
      <div className="btns-wrap">
        <NavLink className="btn-link" to={`/${id}`}>
          <CustomButton color={themes.colors.default}>View Post</CustomButton>
        </NavLink>
        <CustomDrawer btnText="Edit Post" color={themes.colors.success} label="Edit Post">
          <form action="" method="post" onSubmit={editformSubmit}>
            <CustomInput type="text" name="title" onChange={editInputChange} placeholder="Enter Title" />
            <CustomInput type="text" name="sub_title" onChange={editInputChange} placeholder="Enter Sub Title" />
            <CustomInput type="text" name="tags" onChange={editInputChange} placeholder="Enter Tags" />
            <CustomTextArea type="text" name="content" onChange={editInputChange} placeholder="Enter Content" />
            <CustomButton color={themes.colors.success}>Update</CustomButton>
          </form>
        </CustomDrawer>
        <CustomButton color={themes.colors.danger}>
          <Delete />
        </CustomButton>
      </div>
    </div>
  );
};

export default SingleItem;
