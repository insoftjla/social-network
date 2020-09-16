import React from 'react';
import css from './Post.module.css';

const Post = (props) => {
    return (
        <div className={css.item}>
            <img src='https://windows10free.ru/uploads/posts/2017-04/1493287748_1487679899_icon-user-640x640.png'/>
            {props.text}
            <div>
                <span>{props.like} like</span>
            </div>
        </div>
    );
}

export default Post;