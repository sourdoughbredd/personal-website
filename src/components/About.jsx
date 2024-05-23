import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles["about-me-container"]}>
      <h2>About Me</h2>
      <div className={styles.paragraphs}>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
            voluptatibus quibusdam, laudantium perspiciatis, quo suscipit maxime
            voluptatum corrupti autem repellendus odit voluptates! Magni placeat
            et obcaecati, magnam veritatis odio vero.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            aspernatur nobis eum saepe? Et, tempora harum temporibus error quos
            culpa vero est perspiciatis facilis ipsam soluta nisi expedita
            ducimus tempore.
          </p>
        </div>
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            totam autem numquam fuga dolores! Officiis ipsum delectus asperiores
            dolorem repellendus ab possimus iusto eos nostrum omnis eligendi
            molestiae, quam nisi. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Eligendi maxime dolore harum cum suscipit ipsum
            facilis ab officia, totam quas, ea, dignissimos dolor unde deleniti
            obcaecati atque eos mollitia rem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
