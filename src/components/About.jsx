import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles["about-me-container"]}>
      <h2 className="section-title">About Me</h2>
      <div className={styles.paragraphs}>
        <div>
          <p>
            Over the past 12 years, I’ve done a bit of everything—from working
            on an almond ranch to working as a mortgage loan officer, earning an
            M.S. in Mechanical Engineering from UC Berkeley, and even working on
            fighter jets as a flight controls engineer for the U.S. Navy.
            Through all of these experiences, I found my true passion: coding.
            This passion led me to dive headfirst into a career in software
            development.
          </p>
          <p>
            My background is pretty diverse, which has helped me develop the
            discipline and problem-solving skills needed to handle complex
            projects. Having done so many different things, I tend to see
            challenges from a unique angle, which helps me come up with creative
            and effective solutions.
          </p>
        </div>
        <div>
          <p>
            As a full-stack developer, I love building robust, user-friendly
            applications. I enjoy writing clean, well-organized code, and I’m
            good at explaining technical concepts in a way that’s easy to
            understand. Whether I’m developing web applications or perfecting an
            espresso recipe at home, I aim for excellence in everything I do.
          </p>
          <p>
            I’m always up for new challenges and enjoy working with others who
            are passionate about technology. Let’s connect and create something
            awesome together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
