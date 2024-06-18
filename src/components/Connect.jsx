import { Link } from "react-router-dom";
import headshot from "../assets/headshot-dc.jpg";
import styles from "./Connect.module.css";

const Links = () => {
  return (
    <div className={styles["links"]}>
      <a href="https://www.linkedin.com/in/brett-bussell">
        <img
          className={styles.icon}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"
          alt="LinkedIn logo"
        />
        <span>LinkedIn</span>
      </a>
      <a href="https://github.com/sourdoughbredd" className={styles["github"]}>
        <img
          className={styles.icon}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
          alt="github logo"
        />
        <span>Github</span>
      </a>
      <div className={styles["github"]}></div>
    </div>
  );
};

const Connect = () => {
  return (
    <div className={styles["connect-section"]}>
      <h2 className="section-title">Let's Connect</h2>
      <div className={styles["content-container"]}>
        <div className={styles["text-container"]}>
          <p>
            Whether you have a project in mind, need some advice, or just want
            to chat about coding or engineering, feel free to reach out.
          </p>
          <p>
            <Link to="/contact" className={styles["contact-link"]}>
              Send me an email
            </Link>{" "}
            or connect with me elsewhere on the web...
          </p>
          <Links />
        </div>
        <img src={headshot} className={styles["headshot"]} alt="" />
      </div>
    </div>
  );
};

export default Connect;
