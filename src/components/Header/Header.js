import React, { useContext, useState } from "react";
import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";
import { BsFillBellFill } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./header.module.css";

import Logo from "../../Images/Logo.png";
import LightLogo from "../../Images/LightLogo.png";
import { DarkModeContext } from "../../Darkmode/Darkmode";

const Header = () => {
  const { dark, toggleMode } = useContext(DarkModeContext);

  const menuItems = [
    "HOME",
    "MENU &#9660;",
    "OFFERINGS &#9660;",
    "REPORTS",
    "ABOUT US",
    "CONTACT US",
  ];

  let parser = new DOMParser();

  const [menu, setMenu] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={dark ? Logo : LightLogo} alt="Restaurant Logo" />
      </div>
      <ul className={dark ? styles.menuDark : styles.menuLight}>
        {menuItems.map((e, index) => (
          <li key={index}>
            {
              parser.parseFromString(`<!doctype html><body>${e}`, "text/html")
                .body.textContent
            }
          </li>
        ))}
      </ul>
      <div className={styles.right}>
        <div
          className={styles.icons}
          style={{ backgroundColor: `${dark ? "white" : "black"}` }}
        >
          <BsFillBellFill />
          <HiShoppingCart onClick={toggleMode} />
          {dark ? (
            <MdLightMode onClick={toggleMode} />
          ) : (
            <MdDarkMode onClick={toggleMode} />
          )}
        </div>
        <div className={styles.search}>
          <div className={styles.searchIcon}>
            <AiOutlineSearch />
          </div>
          <input
            type="text"
            placeholder="Search"
            style={{
              backgroundColor: `${dark ? "white" : "black"}`,
              color: `${dark ? "black" : "white"}`,
            }}
          ></input>
        </div>
      </div>
      <div className={styles.burgerMenu}>
        <div
          onClick={() => setMenu(!menu)}
          style={{ color: `${dark ? "white" : "black"}`, cursor: "pointer" }}
        >
          {menu ? <AiOutlineCloseCircle /> : <GiHamburgerMenu />}
        </div>
        {menu && (
          <div className={styles.menuItems}>
            <ul>
              {menuItems.map((e, index) => (
                <li key={index}>
                  {
                    parser.parseFromString(
                      `<!doctype html><body>${e}`,
                      "text/html"
                    ).body.textContent
                  }
                </li>
              ))}
            </ul>
            <div>
              <div
                className={styles.icons}
                style={{ backgroundColor: `${dark ? "white" : "black"}` }}
              >
                <BsFillBellFill />
                <HiShoppingCart />
                {dark ? (
                  <MdLightMode onClick={toggleMode} />
                ) : (
                  <MdDarkMode onClick={toggleMode} />
                )}
              </div>
              <div className={styles.search}>
                <div className={styles.searchIcon}>
                  <AiOutlineSearch />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  style={{
                    backgroundColor: `${dark ? "white" : "black"}`,
                    color: `${dark ? "black" : "white"}`,
                  }}
                ></input>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
