import React, { useContext } from "react";

import styles from "./offering.module.css";

import { FaLongArrowAltRight } from "react-icons/fa";
import { DarkModeContext } from "../../Darkmode/Darkmode";

const Offering = () => {
  const { dark } = useContext(DarkModeContext);

  return (
    <div className={styles.container}>
      <div
        className={styles.section}
        style={{ backgroundColor: `${dark ? "#231f20" : "white"}` }}
      >
        <h2 style={{ color: `${dark ? "white" : "#D00024"}` }}>OFFERINGS</h2>
        <div className={styles.main}>
          <div className={styles.section1}>
            <div className={styles.img1}>ORDER</div>
            <div className={styles.img1}>
              <div className={styles.blur}>
                BUTCHER<br></br>SHOP
              </div>
            </div>
            <div className={styles.img1}>RENT</div>
          </div>
          <div className={styles.section2}>
            <div className={styles.img1}>DINE-IN</div>
            <div className={styles.img1}>DELIVERY</div>
            <div className={styles.img1}>
              <div>
                TAWASI
                <p>
                  Lorem ipsum Lorem<br></br>ipsum lorem..........
                </p>
                <FaLongArrowAltRight
                  style={{ color: "#D00024", cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offering;
