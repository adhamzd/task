import React, { useContext } from "react";
import styles from "./video.module.css";

import { BsPlay } from "react-icons/bs";

import videoFooter from "../../Images/videoFooter.png";
import videoFooterLight from "../../Images/videoFooterLight.png";
import { DarkModeContext } from "../../Darkmode/Darkmode";

const Video = () => {
  const { dark } = useContext(DarkModeContext);

  return (
    <div className={styles.section}>
      <div>
        HOW WE PREPARE <br></br>OUR MEAT RIGHT...
      </div>
      <div style={{ fontSize: "7rem" }}>
        <BsPlay />
      </div>
      <img
        src={dark ? videoFooter : videoFooterLight}
        style={{ width: "100%", marginTop: "auto" }}
      />
    </div>
  );
};

export default Video;
