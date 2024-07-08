import styles from "./ProjectLinks.module.css";

const ProjectLinks = ({ links }) => {
  if (!links) {
    return <></>;
  } else if ("alt" in links) {
    return (
      <div className={styles.buttons}>
        <a>{links.alt}</a>
      </div>
    );
  } else {
    return (
      <div className={styles.buttons}>
        <a href={links.live_link}>Live Preview</a>
        <a href={links.repo_link}>Github Repo</a>
      </div>
    );
  }
};

export default ProjectLinks;
