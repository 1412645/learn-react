export const initalState = {
  count: 0,
};

export const reducer = (state, action) => {
  console.log('action: ', action);
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};
