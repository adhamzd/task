import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import styles from "./highlights.module.css";

import dish1 from "../../Images/dish1.png";
import drink1 from "../../Images/drink1.png";
import dish2 from "../../Images/dish2.png";
import dish3 from "../../Images/dish3.png";
import dish4 from "../../Images/center.png";
import dish5 from "../../Images/left.png";

import { BsCircle, BsCircleFill } from "react-icons/bs";
import Carousel from "../Carousel/Carousel";

const Highlights = () => {
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  });

  const show = (size) => {
    if (size > 1500) return 6;
    else if (size <= 1500 && size > 1250) return 5;
    else if (size <= 1250 && size > 900) return 4;
    else if (size <= 900 && size > 500) return 3;
    else if (size <= 500 && size > 420) return 2;
    else return 1;
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <div className={styles.more}>More Products</div>
        <h2>
          <span className={styles.span1}>MENU</span>
          <br></br>
          <span className={styles.span2}>HIGHLIGHTS</span>
        </h2>
        <div className={styles.more}>More Products+</div>
      </div>
      <div className={styles.sale}>
        <h3>SALE</h3>
        <Carousel show={show(size)}>
          <Item dishName={"Name of Dish"} img={dish1} index={0} rate={4} />
          <Item dishName={"Name of Dish"} img={drink1} index={1} rate={5} />
          <Item dishName={"Name of Dish"} img={dish2} index={2} rate={3} />
          <Item dishName={"Name of Dish"} img={dish3} index={3} rate={5} />
          <Item dishName={"Name of Dish"} img={dish4} index={4} rate={4} />
          <Item dishName={"Name of Dish"} img={dish5} index={5} rate={5} />
          <Item dishName={"Name of Dish"} img={dish1} index={6} rate={4} />
          <Item dishName={"Name of Dish"} img={drink1} index={7} rate={5} />
          <Item dishName={"Name of Dish"} img={dish2} index={8} rate={3} />
        </Carousel>
      </div>
      <div className={styles.sale}>
        <h3 style={{ marginTop: "70px" }}>DAILY SPECIALS</h3>
        <Carousel show={show(size) - 1 >= 1 ? show(size) - 1 : 1}>
          <Item dishName={"Name of Dish"} img={dish1} index={0} rate={4} />
          <Item dishName={"Name of Dish"} img={drink1} index={1} rate={5} />
          <Item dishName={"Name of Dish"} img={dish2} index={2} rate={3} />
          <Item dishName={"Name of Dish"} img={dish3} index={3} rate={5} />
          <Item dishName={"Name of Dish"} img={dish4} index={4} rate={4} />
          <Item dishName={"Name of Dish"} img={dish5} index={5} rate={5} />
          <Item dishName={"Name of Dish"} img={dish1} index={6} rate={4} />
          <Item dishName={"Name of Dish"} img={drink1} index={7} rate={5} />
          <Item dishName={"Name of Dish"} img={dish2} index={8} rate={3} />
        </Carousel>
      </div>
      <div className={styles.circles}>
        <BsCircle style={{ color: "#D00024" }} />
        <BsCircleFill />
        <BsCircleFill />
      </div>
    </div>
  );
};

export default Highlights;
