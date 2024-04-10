import { Link } from 'react-router-dom'
import { MdAccountCircle } from "react-icons/md";
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Navigation = ({login}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
          try {
            const response = await axios.get('http://localhost:8080/auth/${login}');
            setUser(response.data);
          } catch (error) {
            console.error('Erro ao buscar o usuário:', error);
          }
        };
    
        fetchUser();
      }, [login]);

    return (
        <nav className="navigation">
            <button className="user-profile">
                <span>{user.login}</span>
            </button>
            <Link to="/menu/account" className='menu'>
                <MdAccountCircle className='icons-menu'></MdAccountCircle>
                <span>Account</span>
            </Link>
            <Link to="/menu" className='menu'>
                <MdAccountCircle className='icons-menu'></MdAccountCircle>
                <span>Dashboard</span>  

            </Link>
            <Link to="/menu/history" className='menu'>
                <MdAccountCircle className='icons-menu'></MdAccountCircle>
                <span>History</span>

            </Link>
            <Link to="/menu/exchange" className='menu'>
                <MdAccountCircle className='icons-menu'></MdAccountCircle>
                <span>Exchange</span>
            </Link>
        </nav>
    )
}