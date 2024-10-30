import React from 'react';
import ReactDOM from 'react-dom/client';
import s from './Profile.module.css';


const Profile = () => {
    return(
        <div className={s.content}>
            <div>
                <img className={s.img} src='https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png' />
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div className={s.item}> 
                    New Post
                </div>
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 1
                </div>
            </div>
      </div>
    );
};
export default Profile;