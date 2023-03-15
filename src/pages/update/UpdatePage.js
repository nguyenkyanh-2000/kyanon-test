import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../components/button/Button";
import InputField from "../../components/inputfield/InputField";
import styles from "./UpdatePage.module.css";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const phoneRegExp =
  /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;

const today = new Date();

const schema = yup
  .object({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    phoneNumber: yup.string().matches(phoneRegExp, "Phone number is not valid"),
    dateOfBirth: yup.date().max(today),
  })
  .required();

function UpdatePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    auth.update(data, navigate("/profile"));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.updateForm}>
      <p className={styles.title}> Profile</p>
      <InputField
        type="text"
        name="fullName"
        label="Full Name"
        register={register}
        errorMsg={errors.fullName?.message}
      />
      <InputField
        type="date"
        name="dateOfBirth"
        label="Date Of Birth"
        register={register}
        errorMsg={errors.dateOfBirth?.message}
      />
      <InputField
        type="text"
        name="email"
        label="Email"
        register={register}
        errorMsg={errors.email?.message}
        value={auth.user?.email}
      />
      <InputField
        type="number"
        name="phoneNumber"
        label="Phone Number"
        register={register}
        errorMsg={errors.phoneNumber?.message}
      />
      <div className={styles.signInRow}>
        <Button type="submit"> Update</Button>
        <Button variant="outlined" type="reset">
          Clear
        </Button>
      </div>
    </form>
  );
}

export default UpdatePage;
