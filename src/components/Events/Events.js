import React, { useContext, useState, useEffect } from "react";
import { DarkModeContext } from "../../Darkmode/Darkmode";
import Carousel from "../Carousel/Carousel";
import styles from "./events.module.css";

const Events = () => {
  const { dark } = useContext(DarkModeContext);
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  });

  const show = (size) => {
    if (size > 1200) return 2;
    else return 1;
  };
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <div className={styles.more}>View More+</div>
        <h2>
          <span className={styles.span1}>EVENTS</span>
          <br></br>
          <span className={styles.span2}>& OVERTURES</span>
        </h2>
        <div className={styles.more}>View More+</div>
      </div>
      <div className={styles.images}>
        <Carousel show={show(size)}>
          <div className={styles.container}>
            <div className={styles.img1}>
              <div style={{ fontSize: "2rem" }}>
                SEATS EMPTY BUT<br></br>STOMACH FULL...
              </div>
              <div style={{ fontSize: "1.5rem" }}>
                Be First To Order Online<br></br>and win an exceptional Dish
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.img2}></div>
          </div>
        </Carousel>
      </div>
      <div className={dark ? styles.back : styles.lightBack}></div>
    </div>
  );
};

export default Events;
