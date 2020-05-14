import React from "react";
import {Field, InjectedFormProps, reduxForm, reset} from "redux-form";
import {maxLength, required} from "../../../utils/validators/validators";
import {Textarea} from "../../../FormControls/FormControls";
import "./MyPosts.css";
import {Post} from "../PostComponent/Post";
import {Dispatch} from "redux";
import {AddPostHandler} from "./MyPostsConnector";
import {PostType} from "../../../types";

const afterSubmit = (result: any, dispatch: Dispatch<any>) =>
    dispatch(reset('addPost'));

type MyPostsProps = {
    posts: PostType[]
    addPost: AddPostHandler
}

type MyPostType = {
    newPostText: string
}

export const MyPosts: React.FC<MyPostsProps> = (props) => {
    let addNewPost = (text: MyPostType) => {
        props.addPost(text.newPostText);
    };

    return (
        <div className="profile_posts">
            <AddPostsReduxForm onSubmit={addNewPost}/>
            <div className="profile_posts-items">
                {[...props.posts].reverse().map(post => {
                    return <Post key={post.id} message={post.message}/>;
                })}
            </div>
        </div>
    );
}

let maxLength30 = maxLength(30);

type MyPostFormProps = {};
type MyPostFormType = React.FC<MyPostFormProps & InjectedFormProps<MyPostType, MyPostFormProps>>;
const PostsForm: MyPostFormType = ({handleSubmit}) => {
    return (
        <form className="form-group textarea" onSubmit={handleSubmit}>
            <Field
                component={Textarea}
                name="newPostText"
                placeholder="What's new?"
                rows="3"
                value=''
                validate={[required, maxLength30]}
            />
            <div>
                <button className="btn btn-primary textarea-send">Add</button>
            </div>
        </form>
    );
}

const AddPostsReduxForm = reduxForm<MyPostType, MyPostFormProps>({
    form: "addPost",
    onSubmitSuccess: afterSubmit
})(PostsForm);
