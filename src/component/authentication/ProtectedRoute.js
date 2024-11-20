import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export const ProtectedRoute = ({ children }) => {
  // const { user } = useAuth();
  const user = null;
  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};
