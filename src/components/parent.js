import React, { useContext } from 'react';
import MyContext from '../contexts/demoContext';
import FirstChild from './firstChild';
import SecondChild from './secondChild';

// const Parent = () => {
//   const value = useContext(MyContext)
//   console.log('value: ', value)
//   return (
//     <div>
//       <div>Parent component: {value.count}</div>
//       <FirstChild />
//       <SecondChild />
//     </div>
//   )
// }

const Parent = () => {
  const value = useContext(MyContext);
  const { state, dispatch } = value;
  console.log('value: ', value);
  const handleAddCount = () => {
    dispatch({ type: 'increment', payload: { data: 'demo context API' } });
  };

  const handleSubCount = () => {
    dispatch({ type: 'decrement' });
  };
  return (
    <div>
      <div>Parent component get count: {state.count}</div>
      <button onClick={handleAddCount}>Add count</button>
      <button onClick={handleSubCount}>Sub count</button>
    </div>
  );
};

export default Parent;
