import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const withAuthRedirect = (WrappedComponent) => {
    return (props) => {
        const isAuth = useSelector((state) => state.auth.isAuth);

        if (!isAuth) {
            return <Navigate to="/login" />;
        }

        return <WrappedComponent {...props} />;
    };
};

export default withAuthRedirect;
