import React from "react";
import PropTypes from 'prop-types';
import styles from "./image.module.css";

export const Image = ({ src, srcset,sizes, defaultImage, fit = "contain" }) => {
  return (
    <>
      <img
      alt = ''
        className={`${styles[fit]} ${styles.genericImage}`}
        src={src ? src : defaultImage}
        srcSet={srcset}
        sizes = {sizes}
      />
    </>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  srcset: PropTypes.string,
  sizes: PropTypes.string,
  defaultImage: PropTypes.string,
  fit: PropTypes.oneOf(['contain','cover'])
};

