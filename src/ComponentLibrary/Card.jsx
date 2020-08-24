import React from "react";
import {Image} from './Image';
import styles from "./card.module.css";

export const Card = ({ imageSrc, className,...props }) => {
  return <div className={`${styles.cardContainer} ${className}`}>
      <div className={styles.imgContainer}>
            <Image src={imageSrc}/>
      </div>
      <div className={styles.detailsContainer}>
            {props.children}
      </div> 
  </div>
};
