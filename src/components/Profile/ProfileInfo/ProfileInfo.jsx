import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return(
        <div className={s.content}>
            <div>
                <img className={s.img} src='https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png' />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;