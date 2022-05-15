import axios from 'axios';

//08255210/json/

const api = axios.create({
baseURL: 'https://viacep.com.br/ws/'
})
export default api;