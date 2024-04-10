import '../menu/Menu.css'
import { Header } from "../../components/Header"
import { Navigation } from '../../components/Navigation'
import { Footer } from "../../components/Footer"

const support = () => {
    return(
        <div className="app">
        <Header/>
        <div className="app-body">
            <div className="app-body-navigation">
               <Navigation/>
                <Footer/>
            </div>
        </div>
    </div>
    )
}
export default support