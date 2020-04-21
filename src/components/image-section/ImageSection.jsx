import React from "react";
import styles from "./image-section.module.css";
import { FeatureImage } from "../feature-image/FeatureImage";

export function ImageSection({ title, children }) {
  return (
    <>
      <FeatureImage></FeatureImage>
      <section className={styles.section}>
        <h2 className={"alternate-title" + " " + styles["animation-wrapper"]}>
          {title}{" "}
        </h2>
        <div
          className={styles["animation-wrapper"] + " " + styles.images}
        ></div>
        {children}
      </section>
    </>
  );
}
