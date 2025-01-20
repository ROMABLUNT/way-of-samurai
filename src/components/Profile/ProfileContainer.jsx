import React, { useEffect } from "react";
import Profile from "./Profile";
import { useSelector, useDispatch } from "react-redux";
import { getStatus, getUserProfile, updateStatus } from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const ProfileContainer = (props) => {
    const profile = useSelector((state) => state.profilePage.profile);
    const status = useSelector((state) => state.profilePage.status);
    const dispatch = useDispatch();
    const { userId } = useParams();

    useEffect(() => {
        const resolvedUserId = userId || 32022; // Default userId
        dispatch(getUserProfile(resolvedUserId));
        dispatch(getStatus(resolvedUserId));
    }, [userId, dispatch]);
    return (
        <div>
            <Profile profile={profile} status={status}  updateStatus={(status) => dispatch(updateStatus(status))} />
        </div>
    );
};

export default compose(
    withAuthRedirect
)(ProfileContainer);
