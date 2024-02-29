import React, { FC, useEffect, useState } from "react";

import { Container, Row } from "react-bootstrap";
import "./contact.css";
import * as emailjs from "emailjs-com";
import AnimatedComponentList from "../../components/animated/AnimatedComponentList";
import AnimatedText from "../../components/animated/AnimatedText";

type EmailData = {
  name: string;
  email: string;
  number: string;
  message: string;
};

const ContactPage: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userID = "G5Op5mBcjlpsm7f3S";
    const templateID = "template_9w24vek";
    const serviceID = "service_0sm9tdd";

    const emailData: EmailData = {
      name: formData.name,
      email: formData.email,
      number: formData.number,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, emailData, userID).then(
      (result) => {
        console.log("Email sent successfully", result.text);
        setSuccessMessage("Email sent successfully");
      },
      (error) => {
        console.error("Error sending email", error);
        setSuccessMessage("Error sending email");
      }
    );

    setFormData({
      name: "",
      email: "",
      number: "",
      message: "",
    });
  };

  useEffect(() => {
    const inputFields = document.querySelectorAll("input, textarea");

    inputFields.forEach((field) => {
      field.addEventListener("focus", () => {
        setSuccessMessage("");
      });
    });

    return () => {
      inputFields.forEach((field) => {
        field.removeEventListener("focus", () => {
          setSuccessMessage("");
        });
      });
    };
  }, []);

  return (
    <Container>
      <Row>
        <div className="col-12 col-lg-6 contact-img-box">
          <AnimatedComponentList index={1}>
            <img src="/img/contact/contact.jpeg" alt="img" />
          </AnimatedComponentList>
        </div>
        <div className="col-12 col-lg-6 ">
          <AnimatedComponentList index={1}>
            <div className="contact-form">
              <h1 className="contact-title">
                <AnimatedText text="Contact Real Estate Belgrade" />
              </h1>
              <p>
                Hey, we’re here to help. Get in touch with us and<br></br>
                we’ll help in whatever way we can
              </p>
              <form onSubmit={handleSubmit} className="contact-form-box">
                <label htmlFor="name">NAME</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />

                <label htmlFor="email">EMAIL</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />

                <label htmlFor="number">PHONE NUMBER</label>
                <input
                  type="number"
                  id="number"
                  name="number"
                  placeholder="Number"
                  value={formData.number}
                  onChange={(e) =>
                    setFormData({ ...formData, number: e.target.value })
                  }
                  required
                />

                <label htmlFor="message">MESSAGE</label>
                <input
                  type="text"
                  id="message"
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />

                <button type="submit">Submit</button>
                <p>{successMessage}</p>
              </form>
            </div>
          </AnimatedComponentList>
        </div>
      </Row>
    </Container>
  );
};

export default ContactPage;
