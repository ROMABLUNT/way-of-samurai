import React from "react";
import styles from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import { followUser, unfollowUser } from "../../api/api";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
    <div>
        {pages.map(p => {
            return <span
            className={props.currentPage === p && styles.selectedPage}                      
            onClick = {(e) => { props.onPageChanged(p);}}>{p}</span>
        })}

    </div>
{

    props.users.map( u => <div key={u.Id}>
        <span>

            <div>
                <NavLink to={'/profile/'+ u.id}>
                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                </NavLink>
            </div>

            <div>
                { u.followed
                ? <button onClick={() => {
                    unfollowUser(u.id)
                    .then(data => {
                        if(data.resultCode == 0) {
                            props.unfollow(u.id)
                        }
                })}}>Unfollow</button>
                : <button onClick={() => { followUser(u.id)
                    .then(data => {
                        if(data.resultCode == 0) {
                            props.follow(u.id)
                        }
                })}}>Follow</button> }
                
            </div>
        </span>
        <span>
            <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </span>
            <span>
                <div>country</div>
                <div>city</div>
            </span>
        </span>
    </div>)
}
</div>
}

export default Users;
