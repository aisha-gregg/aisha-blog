import React from "react";
import styles from "./home.module.css";

export function Home() {
  return (
    <main className={styles["wrapper-content"]}>
      <img
        src="./img/index-photo.jpg"
        alt="profilepic"
        className={styles["profile-photo"]}
      />
    </main>
  );
}
