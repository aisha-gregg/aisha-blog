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
          <img src="/img/paper-plane.png" alt="" className={styles.photologo} />
        </Link>
      </div>
      <div className={styles.links}>
        <Link to="/about">
          <h2 className="alternate-title">--About</h2>
        </Link>
        <Link to="/travel">
          <h2 className="alternate-title"> -Travel- </h2>
        </Link>

        <Link to="/life-abroad">
          <h2 className="alternate-title">Life abroad--</h2>
        </Link>
      </div>
      <SocialMediaLinks className={styles["social-links"]}></SocialMediaLinks>
    </header>
  );
}
