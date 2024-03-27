import "../pages/menu/Menu.css"
import { Link } from 'react-router-dom'
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { TbPigMoney } from "react-icons/tb";
import { HiArrowSmRight } from "react-icons/hi";
import { BiTransfer } from "react-icons/bi";

export const Services = () => {
    return(
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
    )
}