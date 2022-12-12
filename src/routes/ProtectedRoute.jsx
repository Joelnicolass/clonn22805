import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../common/hooks/useAuth";

const ProtectedRoute = ({ children, isNotAuthRedirectTo }) => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to={isNotAuthRedirectTo} />;
  }

  return children;
};

export default ProtectedRoute;
