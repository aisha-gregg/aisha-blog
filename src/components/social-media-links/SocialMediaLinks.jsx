import React from "react";
import styles from "./social-media-links.module.css";

export function SocialMediaLinks({ className }) {
  return (
    <div className={className}>
      <div className={styles.contact}>
        <a
          href="https://www.facebook.com/ak.gregg.3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./img/fb-logo.png" alt="Facebook logo" />
        </a>

        <a
          href="https://www.instagram.com/kamii_90/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./img/insta-logo.jpg" alt="Instagram logo" />
        </a>

        <a
          href="https://twitter.com/gregg_aisha "
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./img/twitter-logo.jpg" alt="Twitter logo" />
        </a>
      </div>
    </div>
  );
}
