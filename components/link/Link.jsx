import React from "react";
import NextLink from "next/link";
import styles from "./link.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function Link({ children, to, className }) {
  return (
    <NextLink className={cx("link", className)} href={to}>
      <a>{children}</a>
    </NextLink>
  );
}
