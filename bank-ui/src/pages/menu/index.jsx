import { Link } from 'react-router-dom'
import './Menu.css'
import { MdAccountCircle } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { TbPigMoney } from "react-icons/tb";
import { HiArrowSmRight } from "react-icons/hi";

const Menu = () => {
    return(
        <div className="app">
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
                <Link to="/menu" className='active'>Overview</Link>
                <Link to="/menu/services" className='active'>Services</Link>
                <Link to="/menu/cards" className='active'>Cards</Link>
                <Link to="/menu/support" className='active'>Support</Link>
                </div>
            </div>
            </header>
            <div className="app-body">
                <div className="app-body-navigation">
                    <nav className="navigation">
                        <button className="user-profile">
                            <span>
                            </span>
                        </button>
                        <Link to="/menu/account" className='menu'>
                        <MdAccountCircle className='icons-menu'></MdAccountCircle>
                        <span>Account</span>

                        </Link>
                        <Link to="/menu/account" className='menu'>
                        <MdAccountCircle className='icons-menu'></MdAccountCircle>
                        <span>Dashboard</span>

                        </Link>
                        <Link to="/menu/account" className='menu'>
                        <MdAccountCircle className='icons-menu'></MdAccountCircle>
                        <span>History</span>

                        </Link>
                        <Link to="/menu/account" className='menu'>
                        <MdAccountCircle className='icons-menu'></MdAccountCircle>
                        <span>Exchange</span>
                        </Link>
                    </nav>
                    <footer className='footer'>
                        <h1>Auth Bank <small>©</small></h1>
                        <div>
                            Leonardo & Erick © <br/>
                            All Rights Reserved 2024
                        </div>
                    </footer>
                </div>
                <div className="app-body-main-content">
                    <section className="service-section">
                        <span id='userBalance'></span>
                        <div className="tiles">
                            <article className="tile">
                                <div className="tile-header">
                                    <BiTransfer></BiTransfer>
                                    <h3>
                                        <span>Transfers</span>
                                    </h3>
                                </div>
                                <Link to="/menu/services" className='services'>
                                    <span>Got to services</span>
                                    <HiArrowSmRight className='icon-button'></HiArrowSmRight>
                                </Link>
                            </article>
                            <article className="tile">
                                <div className="tile-header">
                                    <RiMoneyDollarBoxLine></RiMoneyDollarBoxLine>
                                    <h3>
                                        <span>Deposit</span>
                                    </h3>
                                </div>
                                <Link to="/menu/services" className='services'>
                                    <span>Got to services</span>
                                    <HiArrowSmRight className='icon-button'></HiArrowSmRight>
                                </Link>
                            </article>
                            <article className="tile">
                                <div className="tile-header">
                                    <TbPigMoney></TbPigMoney>
                                    <h3>
                                        <span>Exchange</span>
                                    </h3>
                                </div>
                                <Link to="/menu/exchange" className='services'>
                                    <span>Got to exchanges</span>
                                    <HiArrowSmRight className='icon-button'></HiArrowSmRight>
                                </Link>
                            </article>
                        </div>
                        <div className="service-section-footer">
                            <p>Services are paid according to the current state of the currency and tariff</p>
                        </div>
                    </section>
                    <section className="transfer-section">
                        <div className="transfer-section-header">
                            <h2>Latest transfers</h2>
                            <div className='filter-options'>
                            <span>Choose a transfer to see more details</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
export default Menu