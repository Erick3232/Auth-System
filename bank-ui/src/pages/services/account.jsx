import '../menu/Menu.css'
import { Navigation } from '../../components/Navigation'
import { Footer } from "../../components/Footer"
import { Configuration } from '../../components/Configuration'
import { HeaderAccount } from '../../components/HeaderAccount'
import { Header } from '../../components/Header'

const account = () => {
    return(
        <div className="app">
            <Header/>
            <div className="app-body">
                <div className="app-body-navigation">
                    <Navigation/>
                    <Footer/>
                </div>
                <Configuration/>
            </div>
        </div>
    )
}
export default account