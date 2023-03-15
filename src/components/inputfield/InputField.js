import React from "react";
import styles from "./InputField.module.css";

const InputField = (props) => {
  return (
    <div className={styles.container}>
      <label
        htmlFor={props.name}
        className={props.focusedLabel ? styles.labelFocused : styles.label}
      >
        {props.label}
      </label>
      <input
        type={props.type}
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        className={styles.input}
        value={props.value}
        {...props.register(props.name)}
      ></input>
      <p className={styles.error}>{props.errorMsg}</p>
    </div>
  );
};

export default InputField;
