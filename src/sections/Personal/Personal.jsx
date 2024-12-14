import React from "react";
import githubDark from "../../assets/github-dark.svg";
import githubLight from "../../assets/github-light.svg";
import heroImg from "../../assets/hero-img.png";
import linkedinDark from "../../assets/linkedin-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import locationDark from "../../assets/location-dark.svg";
import locationLight from "../../assets/location-light.svg";
import moon from "../../assets/moon.svg";
import sun from "../../assets/sun.svg";
import { useTheme } from "../../common/ThemeContext";
import styles from "./PersonalStyles.module.css";

function Personal() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "dark" ? moon : sun;
  const linkedinIcon = theme === "dark" ? linkedinDark : linkedinLight;
  const githubIcon = theme === "dark" ? githubDark : githubLight;
  const locationIcon = theme === "dark" ? locationDark : locationLight;

  return (
    <section id="personal" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} />
        <img
          className={styles.colorMode}
          onClick={toggleTheme}
          src={themeIcon}
        />
      </div>

      <div className={styles.info}>
        <h1>
          Lujain <br />
          Mostafa
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://github.com/LujainElTabie/  " target="_blank">
            <img src={githubIcon} />
          </a>
          <a href="https://www.linkedin.com/in/lujain-mostafa/" target="_blank">
            <img src={linkedinIcon} />
          </a>
        </span>
        <span className={styles.locationContainer}>
          <img src={locationIcon} width={30} height={30} />
          <p>Cairo, Egypt</p>
        </span>
        <p className={styles.description}>
          I am a passionate frontend developer that enjoys building dynamic,
          user-friendly interfaces with React and also creating seamless mobile
          experiences with React Native.
        </p>
        <a
          href={
            "https://drive.google.com/uc?export=download&id=1XjpVHRWAPJD1VyBZ31tkZcCOcaZHM5Wq"
          }
        >
          <button className="hover">Download my CV</button>
        </a>
      </div>
    </section>
  );
}

export default Personal;
