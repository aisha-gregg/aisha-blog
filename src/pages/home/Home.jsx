import React from "react";
import styles from "./home.module.css";
import { ImageSection } from "../../components/image-section/ImageSection";
import { useHistory } from "react-router-dom";

export function Home() {
  const history = useHistory();

  return (
    <main className={styles["wrapper-content"]}>
      <section className={styles.introduction}></section>

      <ImageSection
        title="Favourite Cities to date"
        images={[
          { text: "Rome", image: "./img/rome.jpg" },
          { text: "Prague", image: "./img/prague.jpg" },
          {
            text: "Lisbon",
            image: "./img/lisbon.jpg",
            onClick: () => history.push("/posts/lisbon"),
          },
        ]}
      ></ImageSection>

      <ImageSection
        title="New Posts"
        images={[
          {
            text: "Morocco part 1",
            image: "./img/morocco1.jpg",
            onClick: () => history.push("/posts/morocco1"),
          },
          {
            text: "Morocco part 2",
            image: "./img/morocco-main.jpg",
            onClick: () => history.push("/posts/morocco2"),
          },
          {
            text: "Life abroad",
            image: "./img/lifeabroad.jpg",
            onClick: () => history.push("/posts/life-abroad"),
          },
          {
            text: "Oh my, Marseille!",
            image: "./img/cathedral.jpg",
            onClick: () => history.push("/posts/marseille"),
          },
          {
            text: "Surviving quarantine",
            image: "./img/quarantine.jpg",
            onClick: () => history.push("/posts/quarantine"),
          },

          {
            text: "Boungiorno Italy Part1",
            image: "./img/italy.png",
            onClick: () => history.push("/posts/Italy1"),
          },
        ]}
      ></ImageSection>

      <ImageSection
        title="Upcoming Posts"
        images={[{ text: "London Adventures", image: "./img/london.jpg" }]}
      ></ImageSection>
    </main>
  );
}
