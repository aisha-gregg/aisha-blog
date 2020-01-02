import React from "react";
import { Header } from "../header/Header";
import styles from "./page.module.css";
import { Footer } from "../footer/Footer";

export function Page({ children }) {
  return (
    <div className={styles.wrapper}>
      <Header>The adventures of AK Gregg</Header>
      <div className={styles.content}>{children}</div>
      <Footer></Footer>
    </div>
  );
}
