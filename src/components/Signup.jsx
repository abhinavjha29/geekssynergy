import React, { useContext, useRef } from "react";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DataContext } from "../store/DataContext";

const professions = ["Engineer", "Doctor", "Teacher", "Designer", "Artist"];

const SignupForm = () => {
  const nameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const professionRef = useRef();
  const { userSignup } = useContext(DataContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current.value,
      password: passwordRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      profession: professionRef.current.value,
    };
    userSignup(formData);
    // You can perform form submission or validation here
    console.log(formData);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4}>
          <Card style={{ width: "25rem" }}>
            <Card.Header as="h5">User Signup</Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" ref={nameRef} size="sm" required />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordRef}
                    size="sm"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    ref={emailRef}
                    size="sm"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formPhone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="tel" ref={phoneRef} size="sm" required />
                </Form.Group>

                <Form.Group controlId="formProfession">
                  <Form.Label>Profession</Form.Label>
                  <Form.Control
                    as="select"
                    ref={professionRef}
                    size="sm"
                    required
                  >
                    <option value="">Select a profession</option>
                    {professions.map((profession, index) => (
                      <option key={index} value={profession}>
                        {profession}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3">
                  Sign Up
                </Button>
                <a to="/login" className="btn btn-danger mt-3 float-end">
                  Already a User! Click here
                </a>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupForm;
