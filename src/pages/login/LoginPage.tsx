import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useQuery } from "@apollo/client";
import { gql } from "graphql-tag";

const GET_USER = gql`
  query GetUser($user: String!, $password: String!) {
    findUser(user: $user, password: $password) {
      user
      password
    }
  }
`;

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

  const { data } = useQuery(GET_USER, {
    variables: { user: "admin", password: "admin" },
    context: { clientName: "endpoint4" },
  });

  console.log(data);

  return (
    <div className="login-container">
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-lg-5">
            <div className="card">
              <div className="card-body">
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

                  <Button
                    className="login-button"
                    variant="primary"
                    type="submit"
                  >
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
