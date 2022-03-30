import { ACTION_ADD, ACTION_SUB } from './const';
import produce from 'immer';

const initState = {
  count: 0,
  message: 'Hello world',
  infors: {
    data: 'test',
  },
};

const PageReduxReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_ADD:
      console.log('action: ', action)
      return {
        ...state,
        count: action.payload.count,
        infors: produce(state.infors, (draft) => {
          draft['data'] = 'test immer';
        }),
      };
    // return {...state, count: action.payload.count}
    case ACTION_SUB:
      return { ...state, count: action.payload.count };
    default:
      return state;
  }
};

export default PageReduxReducer;
