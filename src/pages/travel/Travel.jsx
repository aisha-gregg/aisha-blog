import styles from "./travel.module.css";
import React from "react";
import { Link } from "../../components/link/Link";

export function Travel() {
  return (
    <menu className={styles.container}>
      <Link to="/travel/morocco">
        <div>
          <img src="./img/morocco-main.jpg" alt="picture of madrid" />
          <p>Hello Morocco!</p>
        </div>
      </Link>
      <Link>
        <div>
          <img src="./img/cathedral.png" alt="picture of madrid" />
          <p>Bonjour Cote d´Azur </p>
        </div>
      </Link>
      <Link>
        <div>
          <img src="./img/italy.png" alt="picture of madrid" />
          <p>Buongiorno Italy</p>
        </div>
      </Link>
      <Link>
        <div>
          <img src="./img/london.jpg" alt="picture of madrid" />
          <p>London adventures</p>
        </div>
      </Link>
      <Link>
        <div>
          <img src="./img/prague.jpg" alt="picture of madrid" />
          <p>Lover Paradise 😘</p>
        </div>
      </Link>
      <Link>
        <div>
          <img src="./img/vienna.jpg" alt="picture of madrid" />
          <p>Vienna waits for you</p>
        </div>
      </Link>
      <Link>
        <div>
          <img src="./img/spain-blogs.jpg" alt="picture of madrid" />
          <p>Spain blogs</p>
        </div>
      </Link>
      <Link>
        <div>
          <img src="./img/vienna.jpg" alt="picture of madrid" />
          <p>Vienna waits for you</p>
        </div>
      </Link>
    </menu>
  );
}
