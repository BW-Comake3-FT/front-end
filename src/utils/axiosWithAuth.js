import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL:'https://cors-anywhere.herokuapp.com/https://co-make-app.herokuapp.com',
    headers:{
      'Content-Type': 'application/json',
      'authenticate': `${token}`,
  }
  });
};