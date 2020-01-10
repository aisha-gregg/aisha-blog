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
        <div>
          <h3>About me</h3>
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
      <section>
        <h1 className={styles.recentposts}>Recent Posts</h1>
        <div className={styles.posts}>
          <FeatureImage
            text="hello morocco"
            image="./img/morocco-main.jpg"
            onClick={() => history.push("/travel/morocco")}
          ></FeatureImage>

          <FeatureImage
            text="Bonjour Cote d´Azur"
            image="./img/cathedral.png"
          ></FeatureImage>
          <FeatureImage
            text="Buongiorno Italy"
            image="./img/italy.png"
          ></FeatureImage>
        </div>
      </section>
    </main>
  );
}
