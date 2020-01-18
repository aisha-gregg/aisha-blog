import React from "react";
import styles from "./home.module.css";
import { FeatureImage } from "../../components/feature-image/FeatureImage";
import { useHistory } from "react-router-dom";

export function Home() {
  const history = useHistory();

  return (
    <main className={styles["wrapper-content"]}>
      <section className={styles.introduction}>
        <img
          src="./img/index-photo.jpg"
          alt="profilepic"
          className={styles["profile-photo"]}
        />
        <div></div>
      </section>
      <section>
        <h2 className={styles.recentposts}>Recent Posts</h2>
        <div className={styles.posts}>
          <FeatureImage
            text="Hello Morocco Part 1"
            image="./img/morocco-main.jpg"
            onClick={() => history.push("/travel/morocco")}
          ></FeatureImage>

          <FeatureImage
            text="Summer in Cote d´Azur"
            image="./img/cathedral.png"
            onClick={() => history.push("/travel/morocco")}
          ></FeatureImage>
          <FeatureImage
            text="Buongiorno Italy"
            image="./img/italy.png"
            onClick={() => history.push("/travel/morocco")}
          ></FeatureImage>
        </div>
      </section>
    </main>
  );
}
