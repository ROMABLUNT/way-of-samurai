import React from 'react';
import s from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';



const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`
    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>
                    <img className={s.profileImage} src='https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg' />
                    {props.name}
                </NavLink>
        </div>       
    )
}

export default DialogItem;