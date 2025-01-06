import React from "react";
import styles from "./users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/user.png";

class Users extends React.Component {

    constructor(props) {
        super(props);

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers (response.data.items);
            });
        
    }

    render () {
        return <div>
        {

            this.props.users.map( u => <div key={u.Id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className="userPhoto" />
                    </div>
                    <div>
                        { u.followed
                        ? <button onClick={() => { this.props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={() => { this.props.follow(u.id)}}>Follow</button> }
                        
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
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
}

export default Users;