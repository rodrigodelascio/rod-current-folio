import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { DiGithubAlt } from "react-icons/di";
import { BiLogoLinkedin } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./ContactHero.module.css";

const ContactHero = () => {
  const form = useRef();

  const notifySuccess = (res) =>
    toast.success(`Message successfully sent! ${res.text}`, {
      position: "top-right",
    });
  const notifyError = (err) =>
    toast.error(`Message not sent! ${err.text}`, {
      position: "top-right",
    });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        form.current,
        `${process.env.REACT_APP_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          notifySuccess(result);
        },
        (error) => {
          notifyError(error);
        }
      );

    e.target.reset();
  };

  return (
    <div className={styles["contact-hero-container"]}>
      <div className={styles["contact-hero-text-wrapper"]}>
        <h1>Contact.</h1>
        <h2>
          It would be great to hear from you, drop me a message and I'll get
          back to you ASAP
        </h2>
        <hr />
        <div className={styles["landing-socials-container"]}>
          <p>Check Out My</p>
          <a
            className={styles["socials-logo-wrapper"]}
            href="https://www.linkedin.com/in/rodrigo-de-lascio/"
            target="__blank"
          >
            <BiLogoLinkedin className={styles.linkedIn} />
          </a>
          <a
            className={styles["socials-logo-wrapper"]}
            href="https://github.com/rodrigodelascio"
            target="__blank"
          >
            <DiGithubAlt className={styles.gitHub} />
          </a>
        </div>
      </div>
      <div className={styles["form-wrapper"]}>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" required />
          <label>Email</label>
          <input type="email" name="user_email" required />
          <label>Message</label>
          <textarea name="message" required />
          <input
            type="submit"
            value="Send"
            className={styles["form-submit-button"]}
          />
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactHero;
