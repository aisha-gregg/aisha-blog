import styles from "./travel.module.css";
import React from "react";
import { Link } from "../../components/link/Link";

export function Travel() {
  return (
    <div className={styles["blog-menu"]}>
      <menu className={styles.container}>
        <Link to="/travel">
          <img src="./img/morocco-main.jpg" alt="picture of madrid" />
          <p>Morocco Blog</p>

          <img src="./img/cathedral1 (1).png" alt="picture of madrid" />
          <p>Cote d´Azur Blog</p>

          <img src="./img/italy1.png" alt="picture of madrid" />
          <p>Italy Blog</p>

          <img src="./img/seville.jpg" alt="picture of madrid" />
          <p>Spain Blogs</p>

          <img src="./img/madrid.jpg" alt="picture of madrid" />
          <p>London Blog</p>

          <img src="./img/madrid.jpg" alt="picture of madrid" />
          <p>Prague Blog</p>
        </Link>
      </menu>
    </div>
  );
}
