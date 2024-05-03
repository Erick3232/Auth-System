import "../pages/menu/Menu.css"
import { Link } from 'react-router-dom'
import Service from "../pages/services/service"
import Support from "../pages/services/support"
import Card from "../pages/services/cards"
import { Route, Routes } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';



export const Header = () => {
    return (
        <header className='app-header'>
            <div className="app-header-logo">
                <div className="logo">
                    <span className="logo-icon"></span>
                    <form id='login-name'>
                        <span className="withLine" id='loginName'></span>
                    </form>
                </div>
            </div>
            <div className="app-header-navigation">
                <div className='tabs'>
                    <Navbar className="tabs" data-bs-theme="dark">
                        <Container>
                            <Navbar.Brand className="active" href="/menu">Home</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link className="active" href="/menu/service">Service</Nav.Link>
                                <Nav.Link className="active" href="/menu/cards">Cards</Nav.Link>
                                <Nav.Link className="active" href="/menu/support">Support</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </div>
                <Routes>
                    <Route path="/menu/service" component={Service} />
                    <Route path="/menu/cards" component={Card} />
                    <Route path="/register" component={Support} />
                </Routes>
            </div>
            <div style={{marginLeft: "40%", marginBottom: "5%"}}>   
            <Button variant="success" style={{marginRight: "20px"}}>Sign up</Button>
            <Button variant="outline-dark">Log out</Button>{' '}
            </div>
        </header>
    )
}