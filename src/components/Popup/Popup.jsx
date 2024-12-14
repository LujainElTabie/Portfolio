import React from "react";
import styles from "./PopupStyles.module.css";

function Popup({ message, onClose }) {
  return (
    <div className={styles.popup} onClick={onClose}>
      {message}
    </div>
  );
}
export default Popup;
