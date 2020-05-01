import React from "react";
import styles from "./image-section.module.css";
import { FeatureImage } from "../feature-image/FeatureImage";
import classNamesBind from "classnames/bind";

const cx = classNamesBind.bind(styles);

export function ImageSection({ title, images }) {
  const render = images.map((image, index) => (
    <FeatureImage
      key={index}
      text={image.text}
      image={image.image}
      onClick={image.onClick}
      className={cx({
        first: index === 0,
        third: index === 2,
        fifth: index === 4,
      })}
    ></FeatureImage>
  ));
  return (
    <section className={styles.section}>
      <h2 className={cx("alternate-title", "animation-wrapper")}>{title}</h2>
      <div className={cx("animation-wrapper", "images")}>{render}</div>
    </section>
  );
}
