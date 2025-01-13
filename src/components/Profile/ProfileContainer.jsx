import React, { useEffect } from "react";
import Profile from "./Profile";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setUserProfile } from "../../redux/profile-reducer";
import { useParams, useNavigate } from "react-router-dom";
import { usersAPI } from "../../api/api";

const ProfileContainer = () => {
    const profile = useSelector((state) => state.profilePage.profile);
    const dispatch = useDispatch();
    const { userId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        let resolvedUserId = userId || 2; // Если userId не указан, берем значение по умолчанию
        usersAPI.getProfile(resolvedUserId)
            .then((response) => {
                dispatch(setUserProfile(response.data));
            })
            .catch((error) => {
                console.error("Failed to fetch user profile:", error);
                // Опционально: обработка ошибок, например, редирект на страницу ошибки
                navigate("/error");
            });
    }, [userId, dispatch, navigate]);

    return (
        <div>
            <Profile profile={profile} />
        </div>
    );
};

export default ProfileContainer;
