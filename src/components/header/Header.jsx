import React from "react";
import styles from "./header.module.css";
import { Link } from "../link/Link";

export function Header() {
  return (
    <header className={styles["content-header"]}>
      <div className={styles.mainlinks}>
        <Link to="/">
          <h1>The adventures of A.K</h1>
        </Link>

        <div className={styles.wrapper}>
          <Link to="/travel">
            <h2>--Travel &</h2>
          </Link>

          <Link to="/living-abroad">
            <h2>Living abroad--</h2>
          </Link>
        </div>

        <div>
          <img
            src="./img/paper-plane.png"
            alt=""
            className={styles.photologo}
          />
        </div>
      </div>
      <div className={styles.contactbox}>
        <div className={styles.contact}>
          <a href="https://www.facebook.com/ak.gregg.3" target="_blank">
            <img src="/img/fb-logo.png" alt="picture of fb logo" />
          </a>

          <a href="https://www.instagram.com/kamii_90/" target="_blank">
            <img src="/img/insta-logo.png" alt="picture of instagram logo" />
          </a>

          <a href="https://twitter.com/gregg_aisha " target="_blank">
            <img src="/img/twitter-logo.png" alt="picture of twitter logo" />
          </a>
        </div>
      </div>

      <div className={styles.photomenu}></div>
    </header>
  );
}
