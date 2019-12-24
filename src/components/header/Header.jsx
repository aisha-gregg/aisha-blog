import React from "react";

export function Header() {
  return (
    <header class="content header">
      <div class="main-links">
        <a href="index.html" class="main-links">
          <h1>The adventures of A.K</h1>
        </a>
        <div class="wrapper">
          <a href="travel.html">
            <h2>--Travel</h2>
          </a>
          <a href="living-abroad.html">
            <h2>Living abroad</h2>
          </a>
          <a href="personal.html">
            <h2>Personal</h2>
          </a>
          <a href="career.html">
            <h2>Career--</h2>
          </a>
        </div>

        <div>
          <img src="./img/paper-plane.png" alt="" class="photo-logo" />
        </div>
      </div>
      <div class="contact-box">
        <div class="contact">
          <a href="https://www.facebook.com/ak.gregg.3" target="_blank">
            <img src="./img/fb-logo.png" alt="picture of fb logo" />
          </a>

          <a href="https://www.instagram.com/kamii_90/" target="_blank">
            <img src="./img/insta-logo.png" alt="picture of instagram logo" />
          </a>

          <a href="https://twitter.com/gregg_aisha " target="_blank">
            <img src="./img/twitter-logo.png" alt="picture of twitter logo" />
          </a>
        </div>
      </div>

      <div class="photo-menu"></div>
    </header>
  );
}
