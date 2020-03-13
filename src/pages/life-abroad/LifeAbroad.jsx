import React from "react";
import styles from "./life-abroad.module.css";
import { FeatureImage } from "../../components/feature-image/FeatureImage";
import { useHistory } from "react-router-dom";

export function LifeAbroad() {
  const history = useHistory();
  return (
    <main className={styles["wrapper-content"]}>
      <FeatureImage
        image="./img/morocco-main.jpg"
        text="Tips"
        onClick={() => history.push("/life-abroad/tips")}
      ></FeatureImage>
    </main>
  );
}
