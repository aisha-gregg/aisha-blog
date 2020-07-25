import React, { useState, useEffect } from "react";
import styles from "./home.module.css";
import { ImageSection } from "../components/image-section/ImageSection";
import { useRouter } from "next/router";
import { About } from "../components/about/about";
import { Page } from "../components/page/Page";

export default function Home() {
  const postsPerPage = 6;

  const [postsToShow, setPostsToShow] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const posts = [
    {
      text: "Cultural differences in Spain",
      image: "./img/cultureshock.jpg",
      onClick: () => router.push("/posts/cultureshock"),
    },
    {
      text: "Love letter to Madrid",
      image: "./img/madridpost.jpg",
      onClick: () => router.push("/posts/madrid"),
    },
    {
      text: "Buenos días, Sevilla!",
      image: "./img/sevillepost.jpg",
      onClick: () => router.push("/posts/seville"),
    },
    {
      text: "Amsterdam Awakening",
      image: "./img/bridge-in-amsterdam.jpg",
      onClick: () => router.push("/posts/amsterdam"),
    },
    {
      text: "Boungiorno Italy Part II",
      image: "./img/italy2.jpg",
      onClick: () => router.push("/posts/italy2"),
    },
    {
      text: "Lockdown series-Our stories",
      image: "./img/sharedstories.jpg",
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
  ];

  const showPosts = (startPage, endPage) => {
    let postsShowing = [];
    const slicedPosts = posts.slice(startPage, endPage);
    postsShowing = [...postsShowing, ...slicedPosts];
    setPostsToShow(postsShowing);
  };

  useEffect(() => {
    showPosts(currentPage, currentPage + postsPerPage);
  }, [currentPage, postsPerPage]);

  const router = useRouter();
  return (
    <Page>
      <main className={styles["wrapper-content"]}>
        <section className={styles.introduction}></section>
        <About></About>
        <div classname={styles["left-arrow"]}>
          <image src="./arrow_back.svg" />{" "}
        </div>
        <div classname={styles["right-arrow"]}>
          <image src="./arrow_forward.svg" />{" "}
        </div>
        <ImageSection title="My Posts" images={postsToShow}></ImageSection>
        <button onClick={() => setCurrentPage(currentPage + postsPerPage)}>
          Load more
        </button>
      </main>
    </Page>
  );
}
