import axios from 'axios'

export const handleSubmit = async (event,login,navigate, setMensagem) => {
    event.preventDefault();
    const url = 'http://localhost:8080/auth/processLogin';
    try {
      const response = await axios.post(url, login);
      const token = response.data.token;
      console.log("Login bem-sucedido", response.data);
      navigate(`/menu/${token}`);
    } catch (error) {
      setMensagem("Login ou senha incorreta!");
    }
  };

export const handleInputChange = (event,setValues) => {
    event.preventDefault();
    const { name, value } = event.target;
    setValues((prevLogin) => ({
      ...prevLogin,
      [name]: value
    }));
  };