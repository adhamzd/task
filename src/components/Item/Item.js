import React from "react";
import styles from "./item.module.css";

import { AiFillStar } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";

const Item = ({ img, dishName, index, rate }) => {
  let rating = [1, 2, 3, 4, 5, 6];
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div
          style={{
            backgroundColor: `${(index + 1) % 2 !== 0 ? "#D00024" : "#231F20"}`,
          }}
          className={styles.item_image}
        >
          <BsFillBookmarkFill className={styles.bookmark} />

          <img src={img} alt="Dish Presentation" className={styles.image} />
        </div>
        <div
          className={styles.description}
          style={{
            backgroundColor: `${(index + 1) % 2 === 0 ? "#D00024" : "#231F20"}`,
          }}
        >
          <div>{dishName}</div>
          <div className={styles.price}>
            <span>Sale $$</span>
            <span style={{ color: "#FFB60B" }}>
              {rating.map((e) => {
                if (e <= rate)
                  return <AiFillStar style={{ color: "#FFB60B" }} key={e} />;
                return <AiFillStar style={{ color: "white" }} key={e} />;
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
