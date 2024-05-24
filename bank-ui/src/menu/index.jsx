import { Header } from '../components/headers/Header'
import { HandleLogin } from '../components/headers/loginHeader'
import './Menu.css'

export const Menu = () => {
    return(
        <div className="app" >
            <HandleLogin>
            <Header/>
            </HandleLogin>
        </div>
    )
}