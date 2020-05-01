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
          <ion-icon name="logo-facebook"></ion-icon>
        </a>

        <a
          href="https://www.instagram.com/kamii_90/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ion-icon name="logo-instagram"></ion-icon>
        </a>

        <a
          href="https://twitter.com/gregg_aisha "
          target="_blank"
          rel="noopener noreferrer"
        >
          <ion-icon name="logo-twitter"></ion-icon>
        </a>
      </div>
    </div>
  );
}
