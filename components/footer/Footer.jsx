import React from "react";
import styles from "./footer.module.css";
import { SocialMediaLinks } from "../social-media-links/SocialMediaLinks";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <h5 className={"alternate-title" + " " + styles.title}>
          Last Updated: April 2020 Follow me!
        </h5>
      </div>
      <SocialMediaLinks></SocialMediaLinks>
    </footer>
  );
}
