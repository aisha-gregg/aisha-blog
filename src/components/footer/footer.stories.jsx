import React from "react";
import { Footer } from "./Footer";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Footer",
  component: Footer
};

export const base = () => (
  <BrowserRouter>
    <Footer></Footer>
  </BrowserRouter>
);
