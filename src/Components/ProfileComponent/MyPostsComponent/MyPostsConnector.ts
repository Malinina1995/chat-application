import {connect, ConnectedProps} from "react-redux";
import {AppReducerType} from "../../../redux-store";
import {addPostActionCreator} from "../../../reducers/profileReducer";

const mapStateToProps = (state:AppReducerType) => {
    return {
        posts: state.profilePage.posts
    };
};

const mapDispatchToProps = {
    addPost: addPostActionCreator
}

export const myPostsConnector = connect(mapStateToProps, mapDispatchToProps);
export type MyPostsPropsFromRedux = ConnectedProps<typeof myPostsConnector>;
export type AddPostHandler = MyPostsPropsFromRedux["addPost"];
