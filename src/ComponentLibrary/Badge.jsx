import React from "react";
import styles from "./badge.module.css";

export const Badge = ({ value, type = "primary", className }) => {
  if (!value) {
    return;
  }
  return (
    <span className={`${styles.badge} ${styles[type]} ${className}`}>
      {value}
    </span>
  );
};
