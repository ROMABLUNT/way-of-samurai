import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return(
            <div className={s.item}> 
                <img src='https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg' />
                {props.message}
                <div>
                    <span>{`Likes ${props.likesCount}`}</span>
                </div>
            </div>
    );
};
export default Post;