import React from "react";
import styles from "./image-section.module.css";
import { FeatureImage } from "../feature-image/FeatureImage";

export function ImageSection({ title, images }) {
  const render = images.map((image) => (
    <FeatureImage
      text={image.text}
      image={image.image}
      onClick={image.onClick}
    ></FeatureImage>
  ));
  return (
    <section className={styles.section}>
      <h2 className={"alternate-title" + " " + styles["animation-wrapper"]}>
        {title}{" "}
      </h2>
      <div className={styles["animation-wrapper"] + " " + styles.images}>
        {render}
      </div>
    </section>
  );
}
