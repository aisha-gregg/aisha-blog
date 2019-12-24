import React from "react";

export function Page({ children }) {
  return (
    <div>
      <header>The adventures of AK Gregg</header>
      {children}
    </div>
  );
}
