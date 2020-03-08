import React from "react";
import styles from "./footer.module.css";
import { Link } from "../link/Link";
import { SocialMediaLinks } from "../social-media-links/SocialMediaLinks";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <h5 className={"alternate-title" + " " + styles.title}>
          Last Updated: January 2020
        </h5>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/travel">Travel</Link>
      </div>
      <SocialMediaLinks></SocialMediaLinks>
    </footer>
  );
}
