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



import logo from "../../assets/logo.png"

export const Header = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link to={"/menu"}>
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
            <Nav.Link href="#pricing">Suport</Nav.Link>
          </Nav>

          <Form inline>
            <Row className="align-items-center">
              <Col xs="auto">
              </Col>
              <Col xs="auto">
                <Link to="/login">
                  <Button type="submit" style={{ paddingLeft: '30px', width: "8vw", marginLeft: "120px" }}>Login</Button>
                </Link>
              </Col>
              <FaLock color='white' style={{ position: "relative", bottom: "28px", left: "20px" }} />
            </Row>
          </Form>
        </Container>
      </Navbar>
    </>
  )
}