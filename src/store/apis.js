import axios from 'axios';

export const getUsers = (count) => {
  console.log('count: ', count);
  return axios.get('https://jsonplaceholder.typicode.com/users');
};
