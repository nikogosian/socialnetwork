import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (

        <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTO-4YdgyXVdI6M8uXQD1EFgnLMniqj0O98HB9mOocrq23yhumc&usqp=CAU" />
            {props.message}

            <div>
                <span>Like {props.likes}</span>
            </div>

        </div>

    );
}

export default Post;