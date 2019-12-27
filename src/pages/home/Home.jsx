import React from "react";
import { Page } from "../../components/page/Page";
import styles from "./home.module.css";

export function Home() {
  return (
    <Page>
      <main className={styles["wrapper-content"]}>
        <img
          src="./img/index-photo.jpg"
          alt="profilepic"
          className={styles["profile-photo"]}
        />
      </main>
    </Page>
  );
}
