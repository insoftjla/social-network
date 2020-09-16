import React from 'react';
import css from './MyPosts.module.css';
import Post from "./Posts/Post";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/Forms/renderField";
import {maxLength50, required} from "../../../utils/validator/validator";

const MyPosts = ({postsData, setNewPost}) => {

    let data = postsData
        .map(post => (<Post text={post.text} like={post.like} key={post.id}/>))

    let onAddNewPost = (data) => {
        setNewPost(data.text);
    }

    return (
        <div className={css.myPosts}>
            <ReduxNewPostForm onSubmit={onAddNewPost}/>
            <div className={css.myPosts}>
                {data}
            </div>
        </div>
    );
}

const NewPostForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field
                component={Textarea}
                name={'text'}
                placeholder='Text'
            validate={[required, maxLength50]}/>
            <button>Add Post</button>
        </form>
    )
}

const ReduxNewPostForm = reduxForm({form: 'newPostForm'})(NewPostForm);

export default MyPosts;