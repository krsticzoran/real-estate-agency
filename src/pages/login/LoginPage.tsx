import React, { useState } from "react";

import "./login.css";

import Form from "react-bootstrap/Form";

import { gql } from "graphql-tag";
import { useLazyQuery } from "@apollo/client";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import { useAuth } from "../../context/AuthContext";
import LoginWrapper from "./LoginWrapper";

const GET_USER = gql`
  query GetUser($user: String!, $password: String!) {
    findUser(user: $user, password: $password) {
      user
      password
      id
    }
  }
`;

const LoginPage = () => {
  const navigate = useNavigate();
  const { setAuthenticated } = useAuth();
  const [formData, setFormData] = useState({
    user: "admin",
    password: "admin81",
  });
  const [authError, setAuthError] = useState(false);

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmitform = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const result = await getAuth();

      if (result.data?.findUser.user) {
        setFormData({ user: "", password: "" });
        Cookies.set("admin", result.data?.findUser.id, { expires: 7 });
        setAuthenticated(true);
        navigate("/dashboard");
      } else {
        console.log("nooo");
      }
    } catch (error) {
      setAuthError(true);
      console.error("Error fetching user:", error);
    }
  };

  const [getAuth, { data }] = useLazyQuery(GET_USER, {
    variables: { user: formData.user, password: formData.password },
    context: { clientName: "endpoint4" },
  });

  return (
    <LoginWrapper>
      <Form onSubmit={handleSubmitform} className="login-form">
        <Form.Group className="mb-3">
          <Form.Label htmlFor="user">Username</Form.Label>
          <Form.Control
            type="text"
            id="user"
            name="user"
            value={formData.user}
            onChange={handleChange}
            placeholder="Enter username"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </Form.Group>
        {authError && (
          <div className="d-flex justify-content-center">
            <p className="text-danger mt-2">
              Please choose a valid username and password.
            </p>
          </div>
        )}
        <div className="d-flex justify-content-center">
          <button className="login-button" type="submit">
            Submit
          </button>
        </div>
      </Form>
    </LoginWrapper>
  );
};

export default LoginPage;
