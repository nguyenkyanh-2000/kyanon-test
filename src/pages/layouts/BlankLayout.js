import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./BlankLayout.module.css";

function BlankLayout() {
  return (
    <>
      <div className={styles.page}>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default BlankLayout;
