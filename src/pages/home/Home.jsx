import React from "react";
import styles from "./home.module.css";
import { ImageSection } from "../../components/image-section/ImageSection";
import { useHistory } from "react-router-dom";
import { About } from "../about/About";

export function Home() {
  const history = useHistory();

  return (
    <main className={styles["wrapper-content"]}>
      <section className={styles.introduction}></section>
      <About></About>

      <ImageSection
        images={[
          { text: "Rome", image: "./img/rome.jpg" },
          {
            text: "Lisbon",
            image: "./img/lisbon.jpg",
            onClick: () => history.push("/posts/lisbon"),
          },

          {
            text: "Morocco Part I",
            image: "./img/morocco1.jpg",
            onClick: () => history.push("/posts/morocco1"),
          },
          {
            text: "Morocco Part II",
            image: "./img/morocco-main.jpg",
            onClick: () => history.push("/posts/morocco2"),
          },
          {
            text: "Life abroad",
            image: "./img/lifeabroad.jpg",
            onClick: () => history.push("/posts/life-abroad"),
          },
          {
            title: "My Posts",
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
            text: "Boungiorno Italy Part I",
            image: "./img/italy.png",
            onClick: () => history.push("/posts/Italy1"),
          },

          { text: "London Adventures", image: "./img/london.jpg" },
        ]}
      ></ImageSection>
    </main>
  );
}
