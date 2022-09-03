import React, { useContext } from "react";

import styles from "./experience.module.css";

import { DarkModeContext } from "../../Darkmode/Darkmode";

const Experience = () => {
  const { dark } = useContext(DarkModeContext);

  return (
    <div
      className={styles.section}
      style={{ backgroundColor: `${dark ? "#231f20" : "white"}` }}
    >
      <div className={styles.main}>
        <div className={styles.main_image}></div>
        <div className={styles.main_text}>
          <h2>
            <span
              className={styles.span1}
              style={{ color: `${dark ? "white" : "black"}` }}
            >
              THE PERFECT
            </span>
            <br></br>
            <span className={styles.span2}>EXPERIECE</span>
          </h2>
          <p style={{ color: `${dark ? "white" : "black"}` }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            <br></br>
            <br></br>
            PICTURED BY: LOREM IPSUM
          </p>
        </div>
      </div>
      <div className={styles.images}>
        <div className={styles.sec_image}></div>
        <div className={styles.sec_image}></div>
        <div className={styles.sec_image}></div>
        <div className={styles.sec_image}></div>
      </div>
    </div>
  );
};

export default Experience;
