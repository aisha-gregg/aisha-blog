import React from "react";
import styles from "./feature-image.module.css";

export function FeatureImage({ text, image, onClick, isComingSoon }) {
  return (
    <div
      className={
        styles.container +
        " " +
        (onClick === undefined ? styles["non-navigable"] : styles["navigable"])
      }
      onClick={() => onClick !== undefined && onClick()}
    >
      <img src={image} alt="" />
      <div className={styles.title}>
        <p>{text}</p>

        {isComingSoon && <p>Coming soon!</p>}
      </div>
    </div>
  );
}
