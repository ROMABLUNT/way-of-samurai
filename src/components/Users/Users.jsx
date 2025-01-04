import React from "react";
import styles from "./users.module.css";

const Users = (props) => {
    if(props.users.length === 0) {
        props.setUsers (
            [
                {id: 1, photoUrl: "https://meloman.ru/media/upload/photos/IMG_1470_GH72Qxr.820x350.JPG", followed: false, fullName: "Dmitry", status: "I am looking for a job now...", location: {country: "Belarus", city: "Minsk",}},
                {id: 2, photoUrl: "https://meloman.ru/media/upload/photos/IMG_1470_GH72Qxr.820x350.JPG", followed: true, fullName: "Ivan", status: "I am looking for a job now...", location: {country: "Russia", city: "Moscow",}},
                {id: 3, photoUrl: "https://meloman.ru/media/upload/photos/IMG_1470_GH72Qxr.820x350.JPG", followed: false, fullName: "Maksim", status: "I am looking for a job now...", location: {country: "Ukraine", city: "Minsk",}},
            ]
        )
    }


    return <div>
        {
            props.users.map( u => <div key={u.Id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className = {styles.userPhoto} />
                    </div>
                    <div>
                        { u.followed
                        ? <button onClick={() => { props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={() => { props.follow(u.id)}}>Follow</button> }
                        
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;