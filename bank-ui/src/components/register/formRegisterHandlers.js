import axios from 'axios'

export const handleInputChange = (event, setValues) => {
    event.preventDefault();
    const { name, value } = event.target;
    setValues((prevValues) => ({
        ...prevValues,
        [name]: name === "document" ? formatCPF(value) : name === "rg" ? formatRG(value) : value
      }));
};

export const handleSubmit = async (event, login, navigate, ) => {
  event.preventDefault();
  if(login.password !== login.confirmPassword){
    console.error("Senhas não coincidem!")
    return;
  }
  const url = "http://localhost:8080/auth/process"
  try{
      const response = await axios.post(url, login)
      console.log("Conta registrada!", response.data)
      navigate("/login")
    } catch(error){
      console.error("Ocorreu um error ao fazer registro: ", error)
    }
};

export const formatCPF = (value) => {
  //remover oq não for numero
  const cleaned = value.replace(/\D/g, '');
  const formatedCPF = cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
  return formatedCPF
}
export const formatRG = (value) => {
  const cleaned = value.replace(/\D/g, '');
  const formatedRG = cleaned.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4')
  return formatedRG
}