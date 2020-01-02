import React from "react";
import styles from "./social-media-links.module.css";

export function SocialMediaLinks({ className }) {
  return (
    <div className={className}>
      <div className={styles.contact}>
        <a href="https://www.facebook.com/ak.gregg.3" target="_blank">
          <img src="/img/fb-logo.png" alt="picture of fb logo" />
        </a>

        <a href="https://www.instagram.com/kamii_90/" target="_blank">
          <img src="/img/insta-logo.jpg" alt="picture of instagram logo" />
        </a>

        <a href="https://twitter.com/gregg_aisha " target="_blank">
          <img src="/img/twitter-logo.jpg" alt="picture of twitter logo" />
        </a>
      </div>
    </div>
  );
}
