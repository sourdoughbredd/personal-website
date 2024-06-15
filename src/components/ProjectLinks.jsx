import styles from "./ProjectLinks.module.css";

const ProjectLinks = ({ private_repo, live_link, repo_link }) => {
  if (private_repo) {
    return (
      <div className={styles.buttons}>
        <a>This code must be kept private. Contact me to request access.</a>
      </div>
    );
  } else {
    return (
      <div className={styles.buttons}>
        <a href={live_link}>Live Preview</a>
        <a href={repo_link}>Github Repo</a>
      </div>
    );
  }
};

export default ProjectLinks;
