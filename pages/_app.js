import React from "react";
import Router from "next/router";
import "../styles/index.css";
import { pageview } from "../features/googly-analytics";

Router.events.on("routeChangeComplete", (url) => pageview(url));

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
