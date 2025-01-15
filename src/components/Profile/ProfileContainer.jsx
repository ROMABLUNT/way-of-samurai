import React, { useEffect } from "react";
import Profile from "./Profile";
import { useSelector, useDispatch } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import { useParams, useNavigate } from "react-router-dom";

const ProfileContainer = () => {
    const profile = useSelector((state) => state.profilePage.profile);
    const isAuth = useSelector((state) => state.auth.isAuth); // Access isAuth from auth reducer
    const dispatch = useDispatch();
    const { userId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth) {
            navigate("../login");
            return;
        }
        const resolvedUserId = userId || 2; // Default userId
        dispatch(getUserProfile(resolvedUserId));
    }, [userId, dispatch, navigate, isAuth]);

    return (
        <div>
            <Profile profile={profile} />
        </div>
    );
};

export default ProfileContainer;
