import React from "react";
import { FeatureImage } from "./FeatureImage";

export default {
  title: "FeatureImage",
  component: FeatureImage,
};

export const base = () => (
  <div style={{ width: "200px" }}>
    <FeatureImage text="Foo" image="https://via.placeholder.com/350" />
  </div>
);

export const isComingSoon = () => (
  <div style={{ width: "200px" }}>
    <FeatureImage
      text="Foo"
      image="https://via.placeholder.com/350"
      isComingSoon
    />
  </div>
);
