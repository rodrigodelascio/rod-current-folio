import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactHero.module.css";

const ContactHero = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
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
      </div>
      <div className={styles["form-wrapper"]}>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input
            type="submit"
            value="Send"
            className={styles["form-submit-button"]}
          />
        </form>
      </div>
    </div>
  );
};

export default ContactHero;
