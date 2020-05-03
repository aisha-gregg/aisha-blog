import React from "react";
import styles from "./about.module.css";

export function About() {
  return (
    <main className={styles["wrapper-content"]}>
      <section className={styles.introduction}>
        <img
          src="./img/index-photo.jpg"
          alt="profilepic"
          className={styles["profile-photo"]}
        />
        <div>
          <h2 className={styles.about}>About me</h2>
          <p className={styles.text}>
            Hi. I am Aisha Kamilah; travel enthusiast and blogger. I am from the
            beautiful twin isles of{" "}
            <a
              href="https://www.google.com/maps?q=trinidad+and+tobago&rlz=1C1GCEA_enES871ES871&um=1&ie=UTF-8&sa=X&ved=2ahUKEwj7tNvOioTpAhUPlhQKHUxpC8YQ_AUoAXoECBkQAw"
              rel="noopener noreferrer"
              target="_blank"
            >
              Trinidad and Tobago
            </a>
            . Now I live in Spain and travel frequently across Europe. For the
            past couple years up until now my perspectives and visions of all
            that I have known continues to be challenged. I want to somehow
            share my stories with the world.
          </p>
          <p className={styles.text}></p>
        </div>
      </section>
    </main>
  );
}
