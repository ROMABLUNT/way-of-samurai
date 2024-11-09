import React from 'react';
import s from './Friend.module.css';
const Friend = (props) => {
    return(
        <div className={s.friends}>
            <img className={s.image} src='https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg' />
            {props.friend}
        </div>
    )
}

export default Friend;