import React, { useRef, forwardRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Link } from "react-router-dom";
import styles from "./Contact.module.css";
import headshot from "../assets/headshot-ucb.jpg";
import email from "../assets/email-outline.svg";

const ContactForm = forwardRef((props, ref) => {
  const [state, handleSubmit] = useForm("mjvnnqav");
  if (state.succeeded) {
    return <p>Thank you for your message! I will get back to you shortly.</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Your Email"
        ref={ref}
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
        className={styles.myclass}
      />
      <textarea
        id="message"
        name="message"
        rows={10}
        placeholder="Your message"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
});

const Headshot = ({ focusEmailInput }) => {
  return (
    <div className={styles["headshot-group"]}>
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
          <Link to="/contact" onClick={focusEmailInput}>
            <img className={styles.icon} src={email} alt="Email icon" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

const Contact = () => {
  const emailInputRef = useRef(null);

  const focusEmailInput = () => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  };

  return (
    <div className={styles.container}>
      <h1>Get in Touch</h1>
      <div className={styles.content}>
        <Headshot focusEmailInput={focusEmailInput} />
        <ContactForm ref={emailInputRef} />
      </div>
    </div>
  );
};

export default Contact;
