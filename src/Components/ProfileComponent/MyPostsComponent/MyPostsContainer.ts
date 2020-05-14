import {MyPosts} from "./MyPosts";
import {myPostsConnector} from "./MyPostsConnector";

export const MyPostsContainer = myPostsConnector(MyPosts);
