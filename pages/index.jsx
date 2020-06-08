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
              text: "Love letter to Madrid",
              image: "./img/italy2.jpg",
              onClick: () => router.push("/posts/madrid"),
            },
            {
              text: "Boungiorno Italy Part II",
              image: "./img/italy2.jpg",
              onClick: () => router.push("/posts/italy2"),
            },
            {
              text: "Lockdown series-Our stories",
              image: "./img/italy2.jpg",
              onClick: () => router.push("/posts/lockdown-series"),
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
              title: "My Posts",
              text: "The Gem of Granada",
              image: "./img/granadapostphoto.jpg",
              onClick: () => router.push("/posts/granada"),
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
              onClick: () => router.push("/posts/italy1"),
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
            {
              text: "Morocco Part II",
              image: "./img/morocco-main.jpg",
              onClick: () => router.push("/posts/morocco2"),
            },
          ]}
        ></ImageSection>
      </main>
    </Page>
  );
}
