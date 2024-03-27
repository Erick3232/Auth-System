import '../menu/Menu.css'
import { Header } from "../../components/Header"
import { Navigation } from '../../components/Navigation'

const cards = () => {
    return(
        <div className="app">
            <Header/>
            <div className="app-body">
                <div className="app-body-navigation">
                   <Navigation/>
                    <footer className='footer'>
                        <h1>Auth Bank <small>©</small></h1>
                        <div>
                            Leonardo & Erick © <br/>
                            All Rights Reserved 2024
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}
export default cards