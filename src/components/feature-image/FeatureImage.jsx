import React from "react";
import styles from "./feature-image.module.css";

export function FeatureImage({ text, image, onClick = () => {} }) {
  return (
    <div className={styles.container} onClick={() => onClick()}>
      <img src={image} alt="" />
      <p>{text}</p>
    </div>
  );
}
