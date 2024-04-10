import '../menu/Menu.css'
import { Header } from "../../components/Header"
import { Navigation } from '../../components/Navigation'
import { Cards } from "../../components/Cards"
import { Footer } from "../../components/Footer"
import  FormCard  from "../../components/formCard/FormCard" 

const cards = () => {
    return(
        <div className="app">
            <Header/>
            <div className="app-body">
                <div className="app-body-navigation">
                   <Navigation/>
                    <Footer/>
                </div>
                <FormCard/>
                <Cards/>
            </div>
        </div>
    )
}
export default cards