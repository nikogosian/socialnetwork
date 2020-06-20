import React from "react";
import  s from './MyPosts.module.css';
import Post from "./Posts/Post";

const MyPosts = () => {
    return (


            <div>
                my posts
                <div>
                    <textarea></textarea>
                    <button>add post</button>
                </div>
                <div className={s.posts}>
                   <Post message="Hi, how are you?" likes='1' />
                   <Post message="it is myy first post" likes='25'/>
                </div>
            </div>

    );
}

export default MyPosts;