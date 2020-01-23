import React from "react";
import styles from "./home.module.css";
import { FeatureImage } from "../../components/feature-image/FeatureImage";
import { useHistory } from "react-router-dom";

export function Home() {
  const history = useHistory();

  return (
    <main className={styles["wrapper-content"]}>
      <section className={styles.introduction}>
        <div>
          <img
            src="./img/marilynbk.png"
            alt="profilepic"
            className={styles["profile-photo"]}
          />
          <p className={styles.description}>
            <span className={styles["first-letter"]}>"W</span>e travel not to
            escape life but for life to not escape us" -Robyn Young. Travel is
            truly something that everyone should consider. Why? Well let`s just
            say that. . . at the end of the day , what is more valuable to us?
            The material items that fill our home..or the memories that fill our
            heart? Join my journey of growth in travel to discover more!
          </p>
        </div>
      </section>
      <section className={styles.section}>
        <h2 className="alternate-title">Favourite Cities to date</h2>
        <div className={styles.favouritecities + " " + styles.city}>
          <FeatureImage text="Rome" image="./img/rome.jpg"></FeatureImage>
          <FeatureImage text="Prague" image="./img/prague.jpg"></FeatureImage>

          <FeatureImage text="Lisbon" image="./img/lisbon.jpg"></FeatureImage>
        </div>
      </section>

      <section className={styles.newposts}>
        <h2 className={styles.newposts + " " + "alternate-title"}>New Posts</h2>

        <div className={styles.city}>
          <FeatureImage
            text="Hello Morocco Part 1"
            image="./img/morocco-main.jpg"
            onClick={() => history.push("/travel/morocco")}
          ></FeatureImage>
        </div>
      </section>

      <section className={styles.upcomingposts}>
        <h2 className="alternate-title">Upcoming Posts</h2>
        <div className={styles.city}>
          <FeatureImage
            text="Cote d´Azur Holiday"
            image="./img/cathedral.png"
          ></FeatureImage>
          <FeatureImage
            text="Buongiorno Italy"
            image="./img/italy.png"
          ></FeatureImage>
          <FeatureImage
            text="London Adventures"
            image="./img/london.jpg"
          ></FeatureImage>
        </div>
      </section>
    </main>
  );
}
