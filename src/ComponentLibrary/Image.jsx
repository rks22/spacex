import React from "react";
import styles from "./image.module.css";

export const Image = ({ src, srcset, defaultImage, fit = "cover" }) => {
  return (
    <>
      <img
      alt = ''
        className={`${styles[fit]} ${styles.genericImage}`}
        src={src ? src : defaultImage}
        srcSet={srcset}
      />
    </>
  );
};
