import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../components/button/Button";
import CheckBox from "../../components/checkbox/CheckBox";
import InputField from "../../components/inputfield/InputField";
import styles from "./LoginPage.module.css";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

// Validate inputs: email and password
const schema = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().required(),
  })
  .required();

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const onSubmit = (data) => {
    auth.signin(data, () => navigate("/"));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
      <p className={styles.title}> Login</p>
      <InputField
        focusedLabel
        type="text"
        name="email"
        label="Email"
        placeholder="example@kyanon.digital"
        register={register}
        errorMsg={errors.email?.message}
      />
      <InputField
        focusedLabel
        type={passwordVisibility ? "text" : "password"}
        name="password"
        label="Password"
        placeholder="Enter your password"
        register={register}
        errorMsg={errors.password?.message}
      />
      <div className={styles.signInRow}>
        <CheckBox
          name="showPassword"
          label="Show password"
          onChange={togglePasswordVisibility}
        ></CheckBox>
        <Button type="submit"> Sign in</Button>
      </div>
    </form>
  );
}

export default LoginPage;
