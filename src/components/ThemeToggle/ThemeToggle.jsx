import React from "react";
import styles from "./ThemeToggle.module.css";

function ThemeToggle({ onClick, value }) {
  return (
    <label htmlFor="theme" className={styles.theme}>
      <span className={styles.theme__toggleWrap}>
        <input
          id="theme"
          className={styles.theme__toggle}
          type="checkbox"
          role="switch"
          name="theme"
          checked={value === "light"}
          onClick={onClick}
        />
        <span className={styles.theme__fill}></span>
        <span className={styles.theme__icon}>
          <span className={styles.theme__iconPart}></span>
          <span className={styles.theme__iconPart}></span>
          <span className={styles.theme__iconPart}></span>
          <span className={styles.theme__iconPart}></span>
          <span className={styles.theme__iconPart}></span>
          <span className={styles.theme__iconPart}></span>
          <span className={styles.theme__iconPart}></span>
          <span className={styles.theme__iconPart}></span>
          <span className={styles.theme__iconPart}></span>
        </span>
      </span>
    </label>
  );
}

export default ThemeToggle;
