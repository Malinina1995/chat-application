import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";

import { MyPosts } from "./MyPosts";
import {
  addPostActionCreator,
  changePostTextActionCreator
} from "../../../reducers/profileReducer";

let mapStateToProps = state => {
  return {
    profilePage: state.profilePage
  };
};

export let MyPostsContainer = connect(
  mapStateToProps,
  {
    addPost: addPostActionCreator,
    onChangeText: changePostTextActionCreator
  }
)(MyPosts);
