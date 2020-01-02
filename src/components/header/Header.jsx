import React from "react";
import styles from "./header.module.css";
import { Link } from "../link/Link";
import { SocialMediaLinks } from "../social-media-links/SocialMediaLinks";

export function Header() {
  return (
    <header className={styles["content-header"]}>
      <div className={styles.mainlinks}>
        <Link to="/">
          <h1>The adventures of A.K</h1>
        </Link>

        <div className={styles.wrapper}>
          <Link to="/about">
            <h2>--About</h2>
          </Link>
          <Link to="/travel">
            <h2> -Travel- </h2>
          </Link>

          <Link to="/life-abroad">
            <h2>Life abroad--</h2>
          </Link>
        </div>

        <div>
          <img src="/img/paper-plane.png" alt="" className={styles.photologo} />
        </div>
      </div>
      <SocialMediaLinks className={styles["social-links"]}></SocialMediaLinks>
      <div className={styles.photomenu}></div>
    </header>
  );
}
