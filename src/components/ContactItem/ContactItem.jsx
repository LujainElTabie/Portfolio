import React from "react";
import copyItemDark from "../../assets/copy-dark.svg";
import copyItemLight from "../../assets/copy-light.svg";
import { useTheme } from "../../common/ThemeContext";
import styles from "./ContactItem.module.css";

function ContactItem({ img, text }) {
  const { theme } = useTheme();
  const copyItem = theme === "dark" ? copyItemDark : copyItemLight;
  return (
    <div className={styles.contactItemWrapper}>
      <img src={img} />
      <p>{text}</p>
      <img src={copyItem} className={styles.copy} />
    </div>
  );
}

export default ContactItem;
