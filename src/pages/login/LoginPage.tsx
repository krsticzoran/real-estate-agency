import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./login.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({ user: "", password: "" });

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmitform = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    setFormData({ user: "", password: "" });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmitform}>
        <label htmlFor="user">
          User:
          <input
            type="text"
            id="user"
            name="user"
            value={formData.user}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Passowrd
          <input
            type="text"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
