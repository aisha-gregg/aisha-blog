import React from "react";
import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.intro}>
        <h1 className={styles.title}>The adventures of A.K</h1>
        <h2 className={styles.subheading}>—Wandering at heart's risk</h2>
      </div>

      <img src="./img/profile1.png" alt="Me" className={styles.profile} />
    </header>
  );
}
