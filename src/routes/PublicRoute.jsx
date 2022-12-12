import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../common/hooks/useAuth";

const PublicRoute = ({ children, isAuthRedirectTo }) => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return children;
  }

  return <Navigate to={isAuthRedirectTo} />;
};

export default PublicRoute;
