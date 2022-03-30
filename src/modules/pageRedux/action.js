import axios from 'axios';
import { ACTION_ADD, ACTION_SUB } from './const';

export const addCount = (value) => {
  // redux-thunk
  // return async (dispatch, getState) => {
  //   console.log('getState: ', getState());
  //   const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  //   console.log('res: ', res);
  //   dispatch({ type: ACTION_ADD, payload: value });
  // };
  return {
    type: ACTION_ADD,
    payload: value,
  };
};

export const subCount = (value) => {
  // return (dispatch, getState) => {
  //   console.log('getState: ', getState());
  //   dispatch({ type: ACTION_SUB, payload: value });
  // };
  return {
    type: ACTION_SUB,
    payload: value,
  };
};
