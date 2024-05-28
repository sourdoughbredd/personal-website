import styles from "./FeaturedProjects.module.css";
import projects from "../data/projects.js";

const Project = ({
  title,
  description,
  features,
  img,
  tech,
  repo_link,
  live_link,
  private_repo,
}) => {
  return (
    <div className={styles.project}>
      <div className={styles["project-content-container"]}>
        <img src={img} alt="" className={styles.screenshot} />
        <div className={styles["project-info-container"]}>
          <h3>{title}</h3>
          <p>{description}</p>
          <h4>Features</h4>
          <ul>
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <div className={styles["tech-stack-container"]}>
            <h4>Tech Stack</h4>
            <span>
              {tech.reduce((acc, curr, idx) => {
                return acc + " " + curr + (idx < tech.length - 1 ? "," : "");
              }, "")}
            </span>
          </div>

          {private_repo ? (
            <div className={styles.buttons}>
              <a>
                This project is part of an ongoing course at UC Berkeley. As
                such, the code must be kept private. Contact me to request
                access.
              </a>
            </div>
          ) : (
            <div className={styles.buttons}>
              <a href={live_link}>Live Preview</a>
              <a href={repo_link}>Github Repo</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const FeaturedProjects = () => {
  return (
    <div className={styles["section-container"]}>
      <h2>Featured Projects</h2>
      <div className={styles["projects-container"]}>
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
