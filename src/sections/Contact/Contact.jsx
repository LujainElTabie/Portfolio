import React from "react";
import emailDark from "../../assets/email-dark.svg";
import emailLight from "../../assets/email-light.svg";
import phoneDark from "../../assets/phone-dark.svg";
import phoneLight from "../../assets/phone-light.svg";
import { useTheme } from "../../common/ThemeContext";
import ContactItem from "../../components/ContactItem/ContactItem";
import styles from "./ContactStyle.module.css";

function Contact() {
  const { theme } = useTheme();
  const phoneIcon = theme === "dark" ? phoneDark : phoneLight;
  const emailIcon = theme === "dark" ? emailDark : emailLight;

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <div className={styles.contactContainer}>
        <ContactItem img={phoneIcon} text={"+201065610441"} />
        <ContactItem img={emailIcon} text={"Lujain2@gmail.com"} />
      </div>
    </section>
  );
}

export default Contact;
