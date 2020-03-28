import React from "react";
import styles from "./home.module.css";
import { ImageSection } from "../../components/image-section/ImageSection";
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
            truly something that everyone should consider. Why? Well let's just
            say that. . . at the end of the day, what is more valuable to us?
            The material items that fill our home... or the memories that fill
            our heart? Join my journey of growth while travelling to discover
            more!
          </p>
        </div>
      </section>

      <ImageSection
        title="Favourite Cities to date"
        images={[
          { text: "Rome", image: "./img/rome.jpg" },
          { text: "Prague", image: "./img/prague.jpg" },
          { text: "Lisbon", image: "./img/lisbon.jpg" }
        ]}
      ></ImageSection>

      <ImageSection
        title="New Posts"
        images={[
          {
            text: "Morocco part 1",
            image: "./img/morocco1.jpg",
            onClick: () => history.push("/posts/morocco1")
          },
          {
            text: "Morocco part 2",
            image: "./img/morocco-main.jpg",
            onClick: () => history.push("/posts/morocco2")
          },
          {
            text: "Life abroad",
            image: "./img/lifeabroad.jpg",
            onClick: () => history.push("/posts/life-abroad")
          },
          {
            text: "Oh my, Marseille!",
            image: "./img/cathedral.jpg",
            onClick: () => history.push("/posts/marseille")
          }
        ]}
      ></ImageSection>

      <ImageSection
        title="Upcoming Posts"
        images={[
          { text: "Boungiorno Italy", image: "./img/italy.png" },
          { text: "London Adventures", image: "./img/london.jpg" },
          { text: "Surviving Quarantine", image: "./img/milan.jpg" }
        ]}
      ></ImageSection>
    </main>
  );
}
