import React, { useEffect } from "react";
import Profile from "./Profile";
import { useSelector, useDispatch } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const ProfileContainer = () => {
    const profile = useSelector((state) => state.profilePage.profile);
    const dispatch = useDispatch();
    const { userId } = useParams();

    useEffect(() => {
        const resolvedUserId = userId || 2; // Default userId
        dispatch(getUserProfile(resolvedUserId));
    }, [userId, dispatch]);

    return (
        <div>
            <Profile profile={profile} />
        </div>
    );
};

export default compose(
    withAuthRedirect
)(ProfileContainer);
