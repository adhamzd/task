import React, { useContext } from "react";
import styles from "./footer.module.css";

import Logo from "../../Images/Logo.png";
import LightLogo from "../../Images/LightLogo.png";

import { FaGreaterThan } from "react-icons/fa";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { DarkModeContext } from "../../Darkmode/Darkmode";

const Footer = () => {
  const { dark } = useContext(DarkModeContext);

  const menu = [
    "DISH OF THE WEEK",
    "MENU HIGHLIGHTS",
    "VIDEO",
    "OFFERINGS",
    "DINE - IN -OFFER",
    "PICTURES OF THE MONTH",
    "EVENTS & OVERTURES",
    "MENU",
    "REPORTS",
    "ABOUT US",
    "CONTACT US",
  ];

  return (
    <div
      className={styles.section}
      style={{
        backgroundColor: `${dark ? "#231f20" : "white"}`,
        color: `${dark ? "white" : "#D00024"}`,
      }}
    >
      <div className={styles.left}>
        <div className={styles.logo}>
          <img src={dark ? Logo : LightLogo} alt="Restaurant Logo" />
        </div>
        <h3>ABOUT US</h3>
        <p style={{ color: `${dark ? "white" : "black"}` }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          <br></br>
          <br></br>
          <span style={{ color: "#D00024", cursor: "pointer" }}>
            Read More+
          </span>
          <br></br>
          <br></br>
          <br></br>
        </p>
        <div
          className={styles.socialMedia}
          style={{ color: `${dark ? "white" : "black"}` }}
        >
          <div>
            <h4>LANGUAGES</h4>
            <p>Arabic / English</p>
          </div>
          <div>
            <h4>SOCIAL MEDIA</h4>
            <p className={styles.icons}>
              <AiFillFacebook />
              <AiOutlineInstagram />
              <AiFillLinkedin />
            </p>
          </div>
        </div>
      </div>
      <div className={styles.center}>
        <h3>CATEGORIES</h3>
        <ul style={{ color: `${dark ? "white" : "black"}`, cursor: "pointer" }}>
          {menu.map((e, i) => (
            <li key={i}>
              <FaGreaterThan />
              {e}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.right}>
        <h3>CONTACT INFO</h3>
        <p style={{ color: `${dark ? "white" : "black"}` }}>
          <BsFillTelephoneFill /> &nbsp; &nbsp; +961 76 088 933
          <br></br>
          <br></br>
          <MdEmail />
          &nbsp; &nbsp; INFO@THEMEATCITY.COM
          <br></br>
          <br></br>
          <MdLocationPin /> &nbsp; &nbsp;LOCATION
          <br></br>
          <br></br>?&nbsp; &nbsp; FAQ
        </p>
        <br></br>
        <input type="text" placeholder="Your Email" />
        <textarea placeholder="Send Message" />
      </div>
    </div>
  );
};

export default Footer;
