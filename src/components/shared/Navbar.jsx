import { useState } from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [toggleMenu, setMenu] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.navbar__button} ${toggleMenu && styles.navbar__open}`} onClick={() => {
        setMenu(prev => !prev)
      }}>
        <div className={styles.navbar__buttonIcon}></div>
      </div>
      <div className={`${styles.navbar__wrapper} ${toggleMenu && styles.navbar__show}`}>
        <ul className={`${styles.navbar__items} ${toggleMenu && styles.navbar__show}`}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>

  );
}

export default Navbar;
