import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-bf095.firebaseio.com/'
});

export default instance;