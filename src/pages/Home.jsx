import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import ProjectShowcase from "../components/ProjectShowcase";

import styles from "./Home.module.css";

import { featuredProjects } from "../data/projects.js";

const Home = () => {
  return (
    <>
      <Hero />
      <hr />
      <About />
      <hr />
      <Skills />
      <hr />
      <ProjectShowcase
        sectionTitle="Featured Projects"
        projects={featuredProjects}
      />
      <div className={styles["see-more"]}>
        <a href="/projects">Click here to see more projects.</a>
      </div>
      <hr />
    </>
  );
};

export default Home;