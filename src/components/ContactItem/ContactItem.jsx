import React, { useState } from "react";
import copyItemDark from "../../assets/copy-dark.svg";
import copyItemLight from "../../assets/copy-light.svg";
import { useTheme } from "../../common/ThemeContext";
import Popup from "../Popup/Popup";
import styles from "./ContactItem.module.css";

function ContactItem({ img, text }) {
  const { theme } = useTheme();
  const copyItem = theme === "dark" ? copyItemDark : copyItemLight;

  const [showToast, setShowToast] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };
  return (
    <>
      <div className={styles.contactItemWrapper} onClick={handleCopy}>
        <img src={img} />
        <p>{text}</p>
        <img src={copyItem} className={styles.copy} />
        {showToast && (
          <Popup message="Copied!" onClose={() => setShowToast(false)} />
        )}
      </div>
    </>
  );
}

export default ContactItem;
