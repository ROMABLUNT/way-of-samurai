import React, { useEffect } from "react";
import Profile from "./Profile";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import { useParams, useNavigate } from "react-router-dom";

const ProfileContainer = () => {
    const profile = useSelector((state) => state.profilePage.profile);
    const dispatch = useDispatch();
    const { userId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        let resolvedUserId = userId || 2; // Если userId не указан, берем значение по умолчанию
        dispatch(getUserProfile(resolvedUserId));
    }, [userId, dispatch, navigate]);

    return (
        <div>
            <Profile profile={profile} />
        </div>
    );
};

export default ProfileContainer;
