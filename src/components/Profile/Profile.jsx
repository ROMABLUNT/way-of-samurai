import React from 'react';
import ReactDOM from 'react-dom/client';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return(
        <div className={s.content}>
            <div>
                <img className={s.img} src='https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png' />
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
      </div>
    );
};
export default Profile;