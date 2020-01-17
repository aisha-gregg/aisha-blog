import React from "react";
import styles from "./footer.module.css";
import { Link } from "../link/Link";
import { SocialMediaLinks } from "../social-media-links/SocialMediaLinks";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <small>Last Updated: January 2020</small>
        <Link to="/">
          <small>Home</small>
        </Link>
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
      </div>
      <SocialMediaLinks></SocialMediaLinks>
    </footer>
  );
}
