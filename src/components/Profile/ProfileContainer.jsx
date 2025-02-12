import React, { useEffect } from "react";
import Profile from "./Profile";
import { useSelector, useDispatch } from "react-redux";
import { getStatus, getUserProfile, updateStatus } from "../../redux/profile-reducer";
import { useParams, useNavigate } from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const ProfileContainer = (props) => {
    const profile = useSelector((state) => state.profilePage.profile);
    const status = useSelector((state) => state.profilePage.status);
    const authorizedUserId = useSelector((state) => state.auth.userId);
    const isAuth = useSelector((state) => state.auth.isAuth); // Проверяем, авторизован ли пользователь
    const dispatch = useDispatch();
    const { userId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // Если пользователь не авторизован, перенаправляем на /login
        if (!isAuth) {
            navigate("/login");
            return; // Прерываем выполнение эффекта
        }

        // Если userId не передан в URL, используем authorizedUserId
        const resolvedUserId = userId || authorizedUserId;

        // Если resolvedUserId все еще отсутствует, это ошибка
        if (!resolvedUserId) {
            console.error("User ID is missing!");
            return;
        }

        // Загружаем данные профиля
        dispatch(getUserProfile(resolvedUserId));
        dispatch(getStatus(resolvedUserId));
    }, [userId, authorizedUserId, isAuth, dispatch, navigate]);

    return (
        <div>
            <Profile 
                profile={profile} 
                status={status} 
                authorizedUserId={authorizedUserId} 
                isAuth={isAuth}  
                updateStatus={(status) => dispatch(updateStatus(status))} 
            />
        </div>
    );
};

export default compose(
    withAuthRedirect
)(ProfileContainer);