import React, { useContext, useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { DataContext } from "../store/DataContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { userLogin } = useContext(DataContext);
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const errorMessageRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const loginData = { email, password };

    const loginResponse = userLogin(loginData);
    if (loginResponse) {
      navigate("/");
    } else {
      alert("Wrong Crendtials");
    }
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <h2 className="mb-4">Login</h2>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formName">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-40 mt-3">
              Login
            </Button>
            <a to="/login" className="btn btn-danger mt-3 float-end">
              New User ! Click Here
            </a>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
