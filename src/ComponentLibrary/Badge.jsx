import React from "react";
import PropTypes from 'prop-types';
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

Badge.propTypes = {
  value: PropTypes.any,
  type: PropTypes.oneOf(['primary', 'secondary']),
  className: PropTypes.string
};
