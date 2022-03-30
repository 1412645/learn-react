import React, { useContext } from 'react';
import MyContext from '../contexts/demoContext';
import SubFristChild from './subFirstChild';

const FirstChild = () => {
  const value = useContext(MyContext)
  return (
    <div>
      <div>FirstChild component: {value.count}</div>
      <SubFristChild />
    </div>
  );
};

export default FirstChild;
