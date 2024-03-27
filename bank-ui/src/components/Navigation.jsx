import { Link } from 'react-router-dom'
import { MdAccountCircle } from "react-icons/md";

export const Navigation = () => {
    return(
        <nav className="navigation">
        <button className="user-profile">
            <span></span>
        </button>
        <Link to="/menu/account" className='menu'>
        <MdAccountCircle className='icons-menu'></MdAccountCircle>
        <span>Account</span>

        </Link>
        <Link to="/menu" className='menu'>
        <MdAccountCircle className='icons-menu'></MdAccountCircle>
        <span>Dashboard</span>

        </Link>
        <Link to="/menu/history" className='menu'>
        <MdAccountCircle className='icons-menu'></MdAccountCircle>
        <span>History</span>

        </Link>
        <Link to="/menu/exchange" className='menu'>
        <MdAccountCircle className='icons-menu'></MdAccountCircle>
        <span>Exchange</span>
        </Link>
    </nav>
    )
}