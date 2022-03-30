import React, { useContext } from 'react';
import MyContext from '../contexts/demoContext';

const SubFristChild = () => {
  const value = useContext(MyContext)
  return (
    <div>
      <div>SubFristChild component: {value.count}</div>
    </div>
  );
};

export default SubFristChild;
