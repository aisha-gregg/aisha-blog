import React from "react";
import styles from "./header.module.css";
import { Link } from "../link/Link";
import { SocialMediaLinks } from "../social-media-links/SocialMediaLinks";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link className={styles.link} to="/">
          <div>
            <h1 className={styles.title}>The adventures of A.K</h1>
            <h2 className={styles.subheading}> -- Wandering at heart's risk</h2>
          </div>
        </Link>

        <img src="./img/profile1.png" alt="" className={styles.profile} />
      </div>
    </header>
  );
}
