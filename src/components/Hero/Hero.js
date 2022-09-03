import React, { useContext } from "react";
import Header from "../Header/Header";
import HeroImage from "../../Images/raphael-nogueir2.png";
import styles from "./hero.module.css";
import { DarkModeContext } from "../../Darkmode/Darkmode";

const Hero = () => {
  const { dark } = useContext(DarkModeContext);
  return (
    <div className={dark ? styles.DarkLanding : styles.LightLanding}>
      <Header />
      <div className={styles.heroSection}>
        <div className={styles.dish}>
          <span
            className={styles.span1}
            style={{ color: `${dark ? "white" : "black"}` }}
          >
            THE DISH
          </span>{" "}
          <br></br>
          <span className={styles.span2}>OF THE WEEK</span>
          <ul>
            <li>Tendorlion</li>
            <li>Pesto</li>
            <li>Beetroot</li>
            <li>
              <span>only</span>
              <br></br>
              <span className={styles.price}>$100</span>
            </li>
            <li>
              <div className={styles.circle}>+</div>
            </li>
          </ul>
        </div>
        <img src={HeroImage} alt="Main Plate" />
      </div>
      <div
        className={styles.circle1}
        style={{ opacity: `${dark ? 1 : 0.3}` }}
      ></div>
      <div
        className={styles.circle2}
        style={{ opacity: `${dark ? 1 : 0.3}` }}
      ></div>
    </div>
  );
};

export default Hero;
