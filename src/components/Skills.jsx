import styles from "./Skills.module.css";

import htmlIcon from "../assets/icons/html-icon.svg";
import cssIcon from "../assets/icons/css-icon.svg";
import jsIcon from "../assets/icons/javascript-icon.svg";
import tsIcon from "../assets/icons/typescript-icon.svg";
import reactIcon from "../assets/icons/react-icon.svg";
import cssModulesIcon from "../assets/icons/css-modules-icon.png";
import nodeIcon2 from "../assets/icons/node-icon2.svg";
import expressIcon from "../assets/icons/express-icon.svg";
import pugIcon from "../assets/icons/pug-icon.svg";
import mongodbIcon from "../assets/icons/mongodb-icon.svg";
import mongooseIcon from "../assets/icons/mongoose-icon.png";
import mySqlIcon from "../assets/icons/mysql-icon.svg";
import gitIcon from "../assets/icons/git-icon.svg";
import githubIcon from "../assets/icons/github-icon.svg";
import jestIcon from "../assets/icons/jest-icon.svg";
import junitIcon from "../assets/icons/junit-icon.svg";
import javaIcon from "../assets/icons/java-icon.svg";
import matlabIcon from "../assets/icons/matlab-icon.svg";
import pythonIcon from "../assets/icons/python-icon.svg";
import cppIcon from "../assets/icons/cpp-icon.svg";
import webpackIcon from "../assets/icons/webpack-icon.svg";

const skillGroups = [
  {
    title: "Programming Languages",
    classname: "languages",
    skills: [
      { str: "JavaScript", img: jsIcon, invert_img: false },
      { str: "TypeScript", img: tsIcon, invert_img: false },
      { str: "Java", img: javaIcon, invert_img: false },
      { str: "Python", img: pythonIcon, invert_img: false },
      { str: "C++", img: cppIcon, invert_img: false },
      { str: "MATLAB", img: matlabIcon, invert_img: false },
    ],
  },
  {
    title: "Frontend",
    classname: "frontend",
    skills: [
      { str: "HTML", img: htmlIcon, invert_img: false },
      { str: "CSS", img: cssIcon, invert_img: false },
      { str: "JavaScript", img: jsIcon, invert_img: false },
      { str: "TypeScript", img: tsIcon, invert_img: false },
      { str: "React", img: reactIcon, invert_img: false },
    ],
  },
  {
    title: "Backend",
    classname: "backend",
    skills: [
      { str: "NodeJS", img: nodeIcon2, invert_img: false },
      { str: "Express", img: expressIcon, invert_img: true },
      { str: "Pug", img: pugIcon, invert_img: false },
    ],
  },
  {
    title: "Database",
    classname: "database",
    skills: [
      { str: "MongoDB", img: mongodbIcon, invert_img: false },
      { str: "Mongoose", img: mongooseIcon, invert_img: false },
      { str: "MySQL", img: mySqlIcon, invert_img: false },
    ],
  },
  {
    title: "DevOps & Tools",
    classname: "devops",
    skills: [
      { str: "Git", img: gitIcon, invert_img: false },
      { str: "GitHub", img: githubIcon, invert_img: true },
      { str: "Webpack", img: webpackIcon, invert_img: false },
      { str: "Jest", img: jestIcon, invert_img: false },
      { str: "JUnit", img: junitIcon, invert_img: true },
    ],
  },
];

const Skill = ({ str, img, invert_img }) => {
  const invertClass = invert_img ? "invert" : "";

  return (
    <div className={styles["skill-container"]}>
      <img src={img} className={styles[invertClass]} alt={`${str} icon`} />
      <span>{str}</span>
    </div>
  );
};

const SkillGroup = ({ title, classname, skills }) => {
  return (
    <div className={`${styles.skillgroup} ${styles[classname]}`}>
      <div className={styles["skillgroup-info"]}>
        <h3>{title}</h3>
        <div className={styles["skillgroup-grid-container"]}>
          <div className={styles["skillgroup-grid"]}>
            {skills.map((skill) => (
              <Skill key={skill.str} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className={styles["skills-section-container"]}>
      <h2 className="section-title">Software Skills</h2>
      <div className={styles["skillgroups-container"]}>
        {/* {skillGroups.map((group) => (
          <SkillGroup key={group.title} {...group} />
        ))} */}
        <div className={`${styles["skillgroups-row"]}`}>
          <SkillGroup {...skillGroups[0]} />
        </div>
        <div className={`${styles["skillgroups-row"]}`}>
          <SkillGroup {...skillGroups[1]} />
          <SkillGroup {...skillGroups[2]} />
        </div>
        <div className={`${styles["skillgroups-row"]}`}>
          <SkillGroup {...skillGroups[3]} />
          <SkillGroup {...skillGroups[4]} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
