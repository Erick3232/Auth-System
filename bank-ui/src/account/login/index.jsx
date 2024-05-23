import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { LoginInput }  from "../../components/login/LoginInput"
export const Login = () => {
  return (
    <div className='login-body'>
      <LoginInput/>
    </div>
  );
};
export default Login;