import React from "react";
import styles from "./footer.module.css";
import { Link } from "../link/Link";
import { SocialMediaLinks } from "../social-media-links/SocialMediaLinks";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <small>Last Updated: December 2019</small>

      <Link to="/about">
        <small>About</small>
      </Link>
      <Link to="/travel">
        <small>Travel</small>
      </Link>
      <Link to="/life-abroad">
        <small>Life abroad</small>
      </Link>
      <Link>
        <small>Programming blog</small>
      </Link>

      <SocialMediaLinks></SocialMediaLinks>
    </footer>
  );
}
