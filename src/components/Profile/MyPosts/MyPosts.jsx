import React from 'react';
import ReactDOM from 'react-dom/client';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return(
            <div>
                My posts

                <div className={s.posts}>

                    <Post message='hi!' likesCount='4'/>
                    
                                    
                </div>
            </div>
    );
};
export default MyPosts;