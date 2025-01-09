import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }

    return(
        <div className={s.content}>
            <div>
                <img className={s.img} src='https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png' />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <div>
                    {props.profile.aboutMe}
                    <br />
                    {props.profile.contacts.vk}
                </div>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;