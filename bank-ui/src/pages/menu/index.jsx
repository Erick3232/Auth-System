import { Link } from 'react-router-dom'
import './Menu.css'

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
        </div>
    )
}
export default Menu