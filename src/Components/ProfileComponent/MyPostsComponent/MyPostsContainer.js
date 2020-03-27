import { connect } from "react-redux";

import { MyPosts } from "./MyPosts";
import {
  addPostActionCreator
} from "../../../reducers/profileReducer";

let mapStateToProps = state => {
  return {
    profilePage: state.profilePage
  };
};

export let MyPostsContainer = connect(
  mapStateToProps,
  {
    addPost: addPostActionCreator
  }
)(MyPosts);
