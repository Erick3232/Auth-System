import "../pages/menu/Menu.css"
import { Link } from 'react-router-dom'
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { TbPigMoney } from "react-icons/tb";
import { BiTransfer } from "react-icons/bi";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

export const Services = () => {
    return (
        <div className="app-body-main-content">
            <section className="service-section">
                <span id='userBalance'></span>
                <div className="tiles">
                    <article className="tile">
                        <div className="tile-header">
                            <div className="d-flex justify-content-around">
                                <Card style={{ width: '18rem', backgroundColor: '#417b34', borderRadius: '10px' }}>
                                    <BiTransfer className="service-img"></BiTransfer>
                                    <Card.Body>
                                        <Card.Title style={{color: '#fff'}}>Transfers</Card.Title>
                                        <Card.Text style={{color: '#fff'}}>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary" href="/menu/service">Go to service</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </article>
                    <article className="tile">
                    <div className="tile-header">
                            <div>
                                <Card style={{backgroundColor: '#fc301a', borderRadius: '10px'}}>
                                    <TbPigMoney className="service-img"></TbPigMoney>
                                    <Card.Body>
                                        <Card.Title style={{color: '#fff'}}>Deposit</Card.Title>
                                        <Card.Text style={{color: '#fff'}}>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary" href="/menu/service">Go to service</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </article>
                    <article className="tile">
                    <div className="tile-header">
                            <div>
                                <Card style={{backgroundColor: '#f9a830', borderRadius: '10px'}}>
                                    <RiMoneyDollarBoxLine className="service-img"></RiMoneyDollarBoxLine>
                                    <Card.Body>
                                        <Card.Title style={{color: '#fff'}}>Exchange</Card.Title>
                                        <Card.Text style={{color: '#fff'}}>
                                            Realize a troca de dinheiro utilizando a nossa API de moeda e retire aqui mesmo!
                                        </Card.Text>
                                        <Button variant="primary" href="/menu/exchange">Go to exchange</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="service-section-footer">
                    <p style={{color: "black"}}>Services are paid according to the current state of the currency and tariff</p>
                </div>
            </section>
            <section className="transfer-section">
                <div className="transfer-section-header" >
                    <h2 style={{color: "black"}}>Latest transfers</h2>
                    <div className='filter-options'>
                        <span style={{color: "black"}}>Choose a transfer to see more details</span>
                    </div>
                </div>
            </section>
        </div>
    )
}