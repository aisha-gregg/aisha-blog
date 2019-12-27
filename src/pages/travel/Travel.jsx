import styles from "./travel.module.css";
import React from "react";
import { Link } from "../../components/link/Link";
import { Page } from "../../components/page/Page";

export function Travel() {
  return (
    <Page>
      <menu className={styles.container}>
        <Link to="/morocco">
          <div>
            <img src="./img/morocco-main.jpg" alt="picture of madrid" />
            <p>Morocco Blog</p>
          </div>
        </Link>
        <Link>
          <div>
            <img src="./img/cathedral1 (1).png" alt="picture of madrid" />
            <p>Cote d´Azur Blog</p>
          </div>
        </Link>
        <Link>
          <div>
            <img src="./img/italy1.png" alt="picture of madrid" />
            <p>Italy Blog</p>
          </div>
        </Link>
        <Link>
          <div>
            <img src="./img/seville.jpg" alt="picture of madrid" />
            <p>Spain Blogs</p>
          </div>
        </Link>
        <Link>
          <div>
            <img src="./img/madrid.jpg" alt="picture of madrid" />
            <p>London Blog</p>
          </div>
        </Link>
        <Link>
          <div>
            <img src="./img/madrid.jpg" alt="picture of madrid" />
            <p>Prague Blog</p>
          </div>
        </Link>
      </menu>
    </Page>
  );
}
