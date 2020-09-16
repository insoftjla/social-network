import React from 'react';
import {setNewPost} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        newPostText: state.profilePage.newPostText,
        postsData: state.profilePage.postData,
    }
}

const MyPostsContainer = connect(mapStateToProps,
    {setNewPost})(MyPosts);

export default MyPostsContainer;