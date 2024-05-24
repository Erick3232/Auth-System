import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { FaLock } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { useUser } from './loginHeader'; 

export const Header = () => {
  const { user } = useUser();

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Link to={"/menu/${id}"}>
          <Image src={logo} alt="Logo" className="mr-2" width="120vw" height="100vh" />
        </Link>
        <Nav className="me-auto">
          <Nav.Link href="/home" className="nav-text" style={{ marginRight: '40px' }}>For You</Nav.Link>
          <Nav.Link href="/features" style={{ marginRight: '40px' }}>For Business</Nav.Link>
          <NavDropdown title="Explore" id="basic-nav-dropdown" style={{ marginRight: '40px' }}>
            <NavDropdown.Item href="#action/3.1">About us Auth Bank</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Finance Education
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Security</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Relationship
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#pricing">Support</Nav.Link>
        </Nav>

        <Form inline>
          <Row className="align-items-center">
            <Col xs="auto">
              {user && (
                <>
                  <span className="text-white mr-3">{user}</span>
                </>
              )}
              {!user && (
                <>
                  <Link to="/login" className="mr-3">
                    <Button>Login</Button>
                  </Link>
                  <FaLock color="white" style={{ position: 'relative', bottom: '3px' }} />
                </>
              )}
            </Col>
          </Row>
        </Form>
      </Container>
    </Navbar>
  );
};

export default Header;
