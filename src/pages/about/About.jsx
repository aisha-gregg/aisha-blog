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
          <h2>About me</h2>
          <p>
            Hi. I am Aisha Kamilah; travel enthusiast and blogger. I am from the
            beautiful twin isles of Trinidad and Tobago. Now I live in Spain and
            travel frequently across Europe. For the past couple years and after
            visiting over 30 cities my perspectives and visions of all that I
            have known continues to be challenged. I want to somehow share my
            stories with the world.
          </p>
          <p>
            I am also a software developer. You can visit my programming blog
            here.
          </p>
        </div>
      </section>
    </main>
  );
}