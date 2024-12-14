import React from "react";
import styles from "./SkillItemStyles.module.css";

function SkillItem({ img, text }) {
  return (
    <div className={styles.skillContainer}>
      <img src={img} />
      <p>{text}</p>
    </div>
  );
}

export default SkillItem;
