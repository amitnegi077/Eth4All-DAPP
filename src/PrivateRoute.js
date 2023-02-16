import { useAuth } from "@arcana/auth-react";
import React from "react";
import { Navigate, Route } from "react-router-dom";

function PrivateRoute({ children }) {
  const authUser = useAuth();
  if (!authUser) {
    // not logged in so redirect to login page with the return url
    return <Navigate to="/login" />;
  }

  // authorized so return child components
  return children;
}

export default PrivateRoute;
