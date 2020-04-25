import React from "react";
import styles from "./feature-image.module.css";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

export function FeatureImage({ text, image, onClick, className }) {
  return (
    <div
      className={cx("container", className, {
        "non-navigable": onClick === undefined,
      })}
      onClick={() => onClick !== undefined && onClick()}
    >
      <img src={image} alt="" />
      <h2 className={cx("title")}>{text}</h2>
    </div>
  );
}
