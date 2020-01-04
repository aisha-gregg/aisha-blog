import React from "react";
import styles from "./home.module.css";

import { Link } from "../../components/link/Link";
import { FeatureImage } from "../../components/feature-image/FeatureImage";

export function Home() {
  return (
    <main className={styles["wrapper-content"]}>
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
          visiting over 30 cities my perspectives and visions of all that I have
          known continues to be challenged. I want to somehow share my stories
          with the world.
        </p>
        <p>
          I am also a software developer. You can visit my programming blog
          here.
        </p>
        
        <div>
          <h1>Recent Posts</h1>
          <menu className={styles.container}>
            <FeatureImage text ="hello morocco"  image="./img/morocco-main.jpg" onClick={} ></FeatureImage>
            
              
             
      <FeatureImage text="bonjour"  image="./img/cathedral.png" ></FeatureImage>
            
            <FeatureImage text="buongiorno Italy"  image="./img/italy.png" ></FeatureImage>
            
          </menu>
        </div>
      </div>
    </main>
  );
}
