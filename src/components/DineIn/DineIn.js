import React from "react";

import styles from "./dineIn.module.css";

import Center from "../../Images/center.png";
import Left from "../../Images/left.png";
import Right from "../../Images/right.png";

const DineIn = () => {
  return (
    <div className={styles.section}>
      <h2>
        <span className={styles.span1}>DINE-IN</span>
        <br></br>
        <span className={styles.span2}>OFFER</span>
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut
      </p>
      <div className={styles.images}>
        <img src={Left} alt="Left Plate" />
        <img src={Center} alt="Center Plate" />
        <img src={Right} alt="Right Plate" />
      </div>
    </div>
  );
};

export default DineIn;
