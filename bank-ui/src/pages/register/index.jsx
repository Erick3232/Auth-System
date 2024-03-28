import './Register.css';
import logo from '../../assets/logo.png'
import { RegisterInput } from '../../components/start/RegisterInput';

const Register = () => {

    return (
        <div className='register-body'>
            <img src={logo} alt="" className='logo'/>
            <RegisterInput/>
        </div>
    );
};

export default Register;