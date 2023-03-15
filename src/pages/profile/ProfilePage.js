import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import styles from "./ProfilePage.module.css";
import format from "date-fns/format";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";

function ProfilePage() {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className={styles.profileForm}>
      <p>Name: {auth.user?.fullName}</p>
      <p>
        Date Of Birth:
        {auth.user?.dateOfBirth
          ? format(auth.user?.dateOfBirth, "MM/dd/yyyy")
          : " MM/DD/YYYY"}
      </p>
      <p>Email: {auth.user?.email}</p>
      <p>Phone Number: {auth.user?.phoneNumber}</p>
      <Button onClick={() => navigate("/")}> Home</Button>
    </div>
  );
}

export default ProfilePage;
