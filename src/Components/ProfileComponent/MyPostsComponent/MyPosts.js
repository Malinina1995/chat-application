import React, { Component } from "react";
import { render } from "react-dom";

import "./MyPosts.css";

import { Post } from "../PostComponent/Post";

export function MyPosts(props) {

  let onAddPost = () => {
    props.addPost();
  }

  let changeText = (event) => {
    let text = event.target.value;
    props.onChangeText(text);
  }

  return (
      <div className="profile_posts">
        <div className="form-group textarea">
          <textarea
            className="form-control"
            placeholder='Что у вас нового?'
            rows="3"
            onChange={changeText}
            value={props.profilePage.newPostText}
          />
          <button type="button" className="btn btn-primary textarea-send" onClick = {onAddPost}>
            Add
          </button>
        </div>
        <div className='profile_posts-items'>
        {
          [...props.profilePage.posts].reverse().map(post => {
            return <Post key={post.id} message={post.message} />
          })
        }
        </div>
      </div>
  );
}
