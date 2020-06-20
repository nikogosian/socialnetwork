import React from "react";
import  s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img className='nkar' src="https://i2.wp.com/background4free.com/download/blue_yellow_light_115379772.jpg?q=100"
                     alt=""/>
                main content
            </div>
            <div>
                ava + descrip
            </div>
          <MyPosts />
        </div>
    );
}

export default Profile;