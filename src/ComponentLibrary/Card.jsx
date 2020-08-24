import React from "react";
import PropTypes from 'prop-types';
import {Image} from './Image';
import styles from "./card.module.css";

export const Card = ({ imageSrc,imageSrcSet, className,...props }) => {
  return <div className={`${styles.cardContainer} ${className}`}>
      <div className={styles.imgContainer}>
            <Image src={imageSrc} srcset={imageSrcSet} sizes={props.sizes}/>
      </div>
      <div className={styles.detailsContainer}>
            {props.children}
      </div> 
  </div>
};

Card.propTypes = {
      imageSrc: PropTypes.string,
      imageSrcSet: PropTypes.string,
      type: PropTypes.string,
      className: PropTypes.string
    };
