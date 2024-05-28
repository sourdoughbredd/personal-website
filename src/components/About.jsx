import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles["about-me-container"]}>
      <h2>About Me</h2>
      <div className={styles.paragraphs}>
        <div>
          <p>
            Over the past 12 years, I've gained a wealth of experience across
            various fields, including working on an almond ranch, a short career
            as a mortgage loan officer, earning an M.S. in Mechanical
            Engineering from UC Berkeley, and serving as a flight controls
            engineer for the U.S. Navy. Through these diverse experiences, I
            developed a profound passion for coding, which led me to fully
            commit to a career in software development.
          </p>
          <p>
            My journey has equipped me with the resilience and adaptability
            needed to tackle complex projects and deliver high-quality
            solutions. I bring a diverse set of skills and experiences to every
            project, allowing me to approach challenges with a fresh and
            creative mindset.
          </p>
        </div>
        <div>
          <p>
            As a full-stack developer, I am passionate about creating robust,
            user-friendly applications with well-organized code. I excel in
            technical presentation and communication, ensuring that complex
            ideas are effectively conveyed to the targeted audience. Whether
            it's developing web applications, optimizing performance, or
            implementing new features, I am committed to excellence in every
            aspect of my work.
          </p>
          <p>
            I'm always excited to take on new challenges and collaborate with
            others who share my passion for technology. Let's connect and make
            something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
