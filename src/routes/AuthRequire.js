import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function AuthRequire({ children }) {
  const { auth } = useContext(AuthContext);
  const location = useLocation();

  if (!auth.isAuthorized) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default AuthRequire;
