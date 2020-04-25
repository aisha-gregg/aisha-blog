import React from "react";
import styles from "./header.module.css";
import { Link } from "../link/Link";
import { SocialMediaLinks } from "../social-media-links/SocialMediaLinks";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link className={styles.link} to="/">
          <h1 className={styles.title}>
            The adventures
            <br />
            of A.K
          </h1>
          <img
            src="./img/paper-plane.png"
            alt=""
            className={styles.photologo}
          />
        </Link>
        <div className={styles.box}>
          <img src="./img/profile.png" alt="" className={styles.profile} />
        </div>

        <SocialMediaLinks className={styles["social-links"]}></SocialMediaLinks>
      </div>
    </header>
  );
}
