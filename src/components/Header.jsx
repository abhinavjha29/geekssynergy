import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="p-3 text-bg-dark" expand="lg">
      <div className="container">
        <Navbar.Toggle aria-controls="navbarNav" />

        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Link to="/" className="nav-link px-2 text-white ">
              Home
            </Link>

            <Link to="/about" className="nav-link px-2 text-white ">
              About
            </Link>
          </Nav>

          <Form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <FormControl
              type="search"
              className="form-control form-control-dark text-bg-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </Form>

          <div className="text-end">
            <Link to="/login">
              <Button variant="outline-light" className="me-2">
                Login
              </Button>
            </Link>

            <Link to="/signup">
              <Button variant="outline-warning">Sign-up</Button>
            </Link>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
