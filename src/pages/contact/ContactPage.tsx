import React, { FC, useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Container, Row } from "react-bootstrap";
import "./contact.css";
import emailjs from "emailjs-com";

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
    <>
      <Header />
      <Container>
        <Row>
          <div className="col-12 col-lg-6 contact-img-box">
            <img src="/img/contact/contact.jpeg" alt="img" />
          </div>
          <div className="col-12 col-lg-6 ">
            <div className="contact-form">
              <h1>Contact Real Estate Belgrade</h1>
              <p>
                Hey, we’re here to help. Get in touch with us and <br></br>
                we’ll help in whatever way we can
              </p>
              <form onSubmit={handleSubmit} className="contact-form-box">
                <label>NAME</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
                <label>EMAIL</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
                <label>PHONE NUMBER</label>
                <input
                  type="number"
                  name="number"
                  placeholder="Number"
                  value={formData.number}
                  onChange={(e) =>
                    setFormData({ ...formData, number: e.target.value })
                  }
                  required
                />
                <label>MESSAGE</label>
                <input
                  type="text"
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
          </div>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ContactPage;
