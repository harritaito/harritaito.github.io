import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Row from "../components/Row";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = e.target.subject.value;
    const message = e.target.message.value;
    window.location.href = `mailto:harri@harritaito.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    setSubmitted(true);
  };

  return (
    <div className="Contact container">
      <Navbar nextProjectLink={null} nextProjectName={null} color="grey" />
      <form onSubmit={handleSubmit}>
        <Row
          content={
            <div className="form col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 col-xl-4 col-xl-offset-4">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" required />
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required />
              <button type="submit">Send email</button>
              {submitted && <p>Thank you! Your email client should open.</p>}
            </div>
          }
        />
      </form>
      <Footer />
      <style jsx>{`
        form {
          padding-top: 5rem;
          padding-bottom: 2rem;
        }
        input,
        textarea {
          width: 100%;
          margin-bottom: 1em;
          padding: 0.5em;
        }
        button {
          padding: 0.5em 1em;
          font-size: 1em;
        }
        @media only screen and (max-width: 45rem) {
          form {
            padding-top: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
