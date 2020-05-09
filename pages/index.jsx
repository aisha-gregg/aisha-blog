import React from "react";
import styles from "./home.module.css";
import { ImageSection } from "../components/image-section/ImageSection";
import { useRouter } from "next/router";
import { About } from "../components/about/about";
import { Page } from "../components/page/Page";

export default function Home() {
  const router = useRouter();
  return (
    <Page>
      <main className={styles["wrapper-content"]}>
        <section className={styles.introduction}></section>
        <About></About>

        <ImageSection
          title="My Posts"
          images={[
            {
              text: "Boungiorno Italy Part II",
              image: "./img/italy2.jpg",
              onClick: () => router.push("/posts/Italy2"),
            },
            {
              text: "Kaixo Bilbao!",
              image: "./img/bilbaocover.jpg",
              onClick: () => router.push("/posts/bilbao"),
            },

            {
              text: "Morocco Part I",
              image: "./img/morocco1.jpg",
              onClick: () => router.push("/posts/morocco1"),
            },
            {
              text: "Morocco Part II",
              image: "./img/morocco-main.jpg",
              onClick: () => router.push("/posts/morocco2"),
            },
            {
              text: "Life abroad",
              image: "./img/lifeabroad.jpg",
              onClick: () => router.push("/posts/life-abroad"),
            },
            {
              text: "Lisbon",
              image: "./img/lisbon.jpg",
              onClick: () => router.push("/posts/lisbon"),
            },
            {
              text: "Surviving quarantine",
              image: "./img/quarantine.jpg",
              onClick: () => router.push("/posts/quarantine"),
            },

            {
              text: "Boungiorno Italy Part I",
              image: "./img/italy.png",
              onClick: () => router.push("/posts/Italy1"),
            },

            {
              text: "London Adventures",
              image: "./img/london.jpg",
              onClick: () => router.push("/posts/london"),
            },
            {
              title: "My Posts",
              text: "Oh my, Marseille!",
              image: "./img/cathedral.jpg",
              onClick: () => router.push("/posts/marseille"),
            },
          ]}
        ></ImageSection>
      </main>
    </Page>
  );
}
