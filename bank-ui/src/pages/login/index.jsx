import './Login.css';
import logo from '../../assets/logo.png'
import { LoginInput } from '../../components/start/LoginInput';

const Login = () => {
  return (
    <div className='login-body'>
        <img src={logo} alt="" className='img' />
        <LoginInput/>
    </div>
  );
};

export default Login;