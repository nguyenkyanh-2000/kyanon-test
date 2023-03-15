import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  let variant;
  switch (props.variant) {
    case "outlined":
      variant = styles.buttonOutlined;
      break;
    case "contained":
      variant = styles.buttonContained;
      break;
    default:
      variant = styles.buttonContained;
      break;
  }
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className={`${styles.button} ${variant}`}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
