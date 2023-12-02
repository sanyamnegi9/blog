import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserStatusContext } from "../contexts/UserStatusContext";

const ProtectedDashboardRoute = ({ children }) => {
  const { user } = useContext(UserStatusContext);

  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedDashboardRoute;
