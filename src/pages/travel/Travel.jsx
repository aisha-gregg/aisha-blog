import styles from "./travel.module.css";
import React from "react";
import { FeatureImage } from "../../components/feature-image/FeatureImage";
import { useHistory } from "react-router-dom";

export function Travel() {
  const history = useHistory();
  return (
    <menu className={styles.container}>
      <FeatureImage
        image="./img/morocco1.jpg"
        text="Morocco Part 1"
        onClick={() => history.push("/posts/morocco1")}
      ></FeatureImage>
      <FeatureImage
        image="./img/morocco-main.jpg"
        text="Morocco Part 2"
        onClick={() => history.push("/posts/morocco2")}
      ></FeatureImage>
      <FeatureImage
        image="./img/cathedral.png"
        isComingSoon
        text="Cote d´Azur Holiday"
      ></FeatureImage>

      <FeatureImage
        image="./img/italy.png"
        isComingSoon
        text="Buongiorno Italy"
      ></FeatureImage>

      <FeatureImage
        image="./img/london.jpg"
        isComingSoon
        text="London adventures"
      ></FeatureImage>
      {/*<Link>
        <div>
          <img src="./img/prague.jpg" alt="picture of madrid" />
          <p>Lovers Paradise 😘</p>
        </div>
      </Link>
      <Link>
        <div>
          <img src="./img/vienna.jpg" alt="picture of madrid" />
          <p>Vienna waits for you</p>
        </div>
      </Link>
      <Link>
        <div>
          <img src="./img/spain-blogs.jpg" alt="picture of madrid" />
          <p>Spain blogs</p>
        </div>
      </Link>
      <Link>
        <div>
          <img src="./img/frankfurt.jpg" alt="picture of madrid" />
          <p>Frankfurt in a day 🙈</p>
        </div>
      </Link>*/}
    </menu>
  );
}
