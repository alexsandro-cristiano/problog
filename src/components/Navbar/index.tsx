import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

import styles from "./Navbar.module.css";
export function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className={` ${styles.navbar} ${styles.container} `}>
      <Link to={"/"}>
        <h3 className={styles.logo}>
          Pro
          <span className={styles.logoDetails}>Blog</span>
        </h3>
      </Link>

      <ul
        className={showMenu ? `${styles.menuMobile}` : `${styles.menu}`}
        onClick={() => setShowMenu(false)}
      >
        <li className={styles.menuItem}>
          <Link to="/" className={styles.menuItemLink}>
            <AiOutlineHome size={20} />
            Home
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/users" className={styles.menuItemLink}>
            <AiOutlineUser size={20} />
            Users
          </Link>
        </li>
      </ul>
      <button
        className={styles.mobileMenuIcon}
        aria-label={"icone navegação menu mobile"}
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </button>
    </nav>
  );
}
