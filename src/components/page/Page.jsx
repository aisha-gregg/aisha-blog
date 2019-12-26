import React from "react";
import { Header } from "../header/Header";

export function Page({ children }) {
  return (
    <div>
      <Header>The adventures of AK Gregg</Header>
      {children}
    </div>
  );
}
