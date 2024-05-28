import { Cards } from '../components/body/Cards'
import { Footer } from '../components/body/Footer'
import Navigation from '../components/body/Navigation'
import { Header } from '../components/headers/Header'
import './Menu.css'

export const Menu = () => {
    return (
        <div className="app" >
            <Header />
                <div className='carrousel-navigation'>
                    <Navigation/>
                    <div className="card-container">
                        <Cards/>
                    </div>
                </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}