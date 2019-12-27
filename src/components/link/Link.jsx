import React from "react";
import { Link as RouterLink } from "react-router-dom";
import styles from "./link.module.css";

export function Link({ children, to }) {
  return (
    <RouterLink className={styles.link} to={to}>
      {children}
    </RouterLink>
  );
}
