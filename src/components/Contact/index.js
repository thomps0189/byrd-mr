import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };
  return (
    <section id="form-container">
      <form id="contact-form" onSubmit={handleSubmit}>
        <label id="form-header" for="full-name">
          Full Name
        </label>
        <input
          type="text"
          id="full-name"
          name="full-name"
          defaultValue={name}
          placeholder="Enter your full name"
          onBlur={handleChange}
        />
        <label id="form-header" for="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          defaultValue={email}
          placeholder="Enter your email"
          onBlur={handleChange}
        />
        <label id="form-header" for="message">
          Message
        </label>
        <input
          type="text"
          id="message"
          name="message"
          placeholder="What are your plans?"
          defaultValue={message}
          onBlur={handleChange}
        />
      </form>
      {errorMessage && (
        <div>
          <p id="error-text">{errorMessage}</p>
        </div>
      )}

      <button id="submit-btn" type="submit">
        Send Message &rarr;
      </button>
    </section>
  );
}

export default Contact;
