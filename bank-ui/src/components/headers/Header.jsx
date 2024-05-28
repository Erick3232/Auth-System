import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import { FaLock } from "react-icons/fa";
import logo from "../../assets/logo.png";
import './Header.css';

export const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
      <Container>
        <Link to={"/menu/${id}"}>
          <Image src={logo} alt="Logo" className="navbar-logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home" className="nav-link-custom">For You</Nav.Link>
            <Nav.Link as={Link} to="/features" className="nav-link-custom">For Business</Nav.Link>
            <Nav.Link as={Link} to="/features" className="nav-link-custom">Services</Nav.Link>
            <Nav.Link as={Link} to="#pricing" className="nav-link-custom">Support</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Row className="align-items-center">
              <Col xs="auto">
                <Link to="/login" className="mr-3">
                  <Button className="login-button">Login</Button>
                </Link>
                <FaLock color="white" className="lock-icon" />
              </Col>
            </Row>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
