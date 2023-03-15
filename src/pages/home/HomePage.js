import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import AuthContext from "../../context/AuthContext";
import styles from "./HomePage.module.css";

function HomePage() {
  const navigate = useNavigate();
  const { auth, signout } = useContext(AuthContext);
  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    signout(() => navigate("/"));
  };

  const handleUserProfile = () => {
    if (auth.user) navigate("/profile");
    else navigate("/login");
  };

  const handleUpdateProfile = () => {
    navigate("/update");
  };

  return (
    <div className={styles.container}>
      {auth.user && `Welcome! ${auth.user.email}`}
      <Button disabled={auth.user ? true : false} onClick={handleLogin}>
        Log in
      </Button>
      <Button disabled={!auth.user ? true : false} onClick={handleLogout}>
        Log out
      </Button>
      <Button disabled={!auth.user ? true : false} onClick={handleUserProfile}>
        Profile
      </Button>
      <Button
        disabled={!auth.user ? true : false}
        onClick={handleUpdateProfile}
      >
        Update
      </Button>
    </div>
  );
}

export default HomePage;
