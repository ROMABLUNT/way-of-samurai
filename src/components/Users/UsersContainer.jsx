import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { setUsercAC, followAC, unfollowAC } from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsercAC(users));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Users);