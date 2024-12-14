import React from "react";
import djangoIcon from "../../assets/djangoproject.svg";
import gitIcon from "../../assets/git.svg";
import javascriptIcon from "../../assets/javascript.svg";
import nextJSIcon from "../../assets/next-js.svg";
import nodeJSIcon from "../../assets/node-js.svg";
import pythonIcon from "../../assets/python.svg";
import reactIcon from "../../assets/react.svg";
import tailwindcssIcon from "../../assets/tailwindcss.svg";
import typescriptIcon from "../../assets/typescript.svg";
import SkillItem from "../../components/SkillItem/SkillItem";
import styles from "./SkillsStyles.module.css";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillItem img={javascriptIcon} text="Javascript" />
        <SkillItem img={typescriptIcon} text="Typescript" />
        <SkillItem img={pythonIcon} text="Python" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillItem img={reactIcon} text="React" />
        <SkillItem img={nextJSIcon} text="NextJS" />
        <SkillItem img={nodeJSIcon} text="NodeJS" />
        <SkillItem img={djangoIcon} text="Django" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillItem img={tailwindcssIcon} text="Tailwind" />
        <SkillItem img={gitIcon} text="Git" />
      </div>
    </section>
  );
}

export default Skills;
