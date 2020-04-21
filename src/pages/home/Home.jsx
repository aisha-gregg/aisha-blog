import React from "react";
import styles from "./home.module.css";
import { ImageSection } from "../../components/image-section/ImageSection";

import { Link, Switch } from "react-router-dom";

export function Home() {
  return (
    <main className={styles["wrapper-content"]}>
      <section className={styles.introduction}></section>

      <ImageSection title="Favourite Cities to date">
        <li>
          <Link to="/posts/lisbon">Lisbon</Link>
        </li>
        <li>
          <Link to="/posts/lisbon">Prague</Link>
        </li>
      </ImageSection>

      <ImageSection title="New Posts">
        <li>
          <Link to="/posts/morocco1">Morocco part 1</Link>
        </li>
        <li>
          <Link to="/posts/morocco2">Morocco part 2</Link>
        </li>
        <li>
          <Link to="/posts/morocco2">Morocco part 2</Link>
        </li>
        <li>
          <Link to="/posts/life-abroad">Life abroad</Link>
        </li>
        <li>
          <Link to="/posts/marseille">Oh my, Marseille!</Link>
        </li>
        <li>
          <Link to="/posts/quarantine">Surviving quarantine!</Link>
        </li>
        <li>
          <Link to="/posts/Italy1">Boungiorno Italy Part1</Link>
        </li>
      </ImageSection>

      <ImageSection
        title="Upcoming Posts"
        images={[{ text: "London Adventures", image: "./img/london.jpg" }]}
      ></ImageSection>
    </main>
  );
}
