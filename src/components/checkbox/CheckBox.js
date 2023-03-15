import React from "react";
import styles from "./CheckBox.module.css";

const CheckBox = (props) => {
  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        id={props.name}
        name={props.name}
        className={styles.input}
        onChange={props.onChange}
      ></input>
      <label htmlFor={props.name}>{props.label}</label>
    </div>
  );
};

export default CheckBox;
