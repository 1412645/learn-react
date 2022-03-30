import React, { useContext } from 'react';
import MyContext from '../contexts/demoContext';

const SecondChild = () => {
  const value = useContext(MyContext)
  return (
    <div>
      <div>SecondChild component: {value.count}</div>
    </div>
  );
};

export default SecondChild;
