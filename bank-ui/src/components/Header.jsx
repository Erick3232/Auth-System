import "../pages/menu/Menu.css"
import { BrowserRouter, Link } from 'react-router-dom'
import Service  from "../pages/services/service"
import Support  from "../pages/services/support"
import Card  from "../pages/services/cards"
import { Route, Routes} from "react-router-dom";


export const Header = () => {
    return(
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
                <Link to="/menu/service" className='active'>Services</Link>
                <Link to="/menu/cards" className='active'>Cards</Link>
                <Link to="/menu/support" className='active'>Support</Link>
                </div>
            <Routes>
                <Route path="/menu/service" component = {Service} />
                <Route path="/menu/cards" component={Card}/>
                <Route path="/register" component={Support} />
            </Routes>
            </div>
        </header>
    )
}