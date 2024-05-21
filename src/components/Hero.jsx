import styles from "./Hero.module.css";
import headshot from "../assets/headshot-ucb.jpg";
import email from "../assets/email-outline.svg";

const Tagline = () => {
  return (
    <div className={styles["tagline-container"]}>
      <hr />
      <h1>
        Adaptable, resilient, and passionate about overcoming complex
        challenges.
      </h1>
      <p>
        I'm Brett, a former flight controls engineer building a new career as a
        software developer. I've got full-stack web development skills with a
        passion for the complexities of backend design.
      </p>
    </div>
  );
};

const Headshot = () => {
  return (
    <div className={styles["headshot-container"]}>
      <img
        className={styles.headshot}
        src={headshot}
        alt="Headshot of Brett Bussell in front of a building that reads 'Engineering'"
      />
      <ul className={styles["external-links-container"]}>
        <li>
          <a href="https://github.com/sourdoughbredd">
            <img
              className={styles.icon}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
              alt="github logo"
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/brett-bussell">
            <img
              className={styles.icon}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"
              alt="LinkedIn logo"
            />
          </a>
        </li>
        <li>
          <a href="">
            <img className={styles.icon} src={email} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};

const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <Tagline />
        <Headshot />
      </div>
    </>
  );
};

export default Hero;
