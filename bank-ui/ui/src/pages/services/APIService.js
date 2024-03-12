// api.js
import axios from 'axios';

const REGISTER_API_URL = 'https://localhost:8080/auth/process';

class APIService{
  createUsers(){
    return axios.post(REGISTER_API_URL);
  }
}

export default new APIService();
