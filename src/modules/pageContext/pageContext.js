import React, { useState, useMemo, useCallback, useReducer } from 'react';
import Parent from '../../components/parent';
import MyContext from '../../contexts/demoContext';
import DemoHook from './demoHook';
import { initalState, reducer } from './contextReducer';
import DemoComponent from '../../components/demoComponent';

// const PageContext = () => {
//   const [data, setData] = useState({ count: 0 });
//   const [number, setNumber] = useState(10);
//   const handleUpdate = () => {
//     const newData = { count: data.count + 1 };
//     setData(newData);
//   };

//   const calculatorNumber = useMemo(() => {
//     console.log('rerender');
//     return number * 10;
//   }, [number]);

//   const handleDemoHook = useCallback(() => {
//     console.log('prop of demo hook');
//   }, [number]);

//   return (
//     <>
//       <MyContext.Provider value={data}>
//         <h1>Page Context</h1>
//         <div>Content Context page</div>
//         <div>Number to test hook: {calculatorNumber}</div>
//         <button onClick={handleUpdate}>Update</button>
//         <Parent />
//         <DemoHook handleDemoHook={handleDemoHook} />
//       </MyContext.Provider>
//     </>
//   );
// };

const PageContext = () => {
  const [state, dispatch] = useReducer(reducer, initalState);
  const valueContext = { state, dispatch };
  console.log('PageContext');
  // const [data, setData] = useState({ count: 0 });
  // const [number, setNumber] = useState(10);
  // const handleUpdate = () => {
  //   const newData = { count: data.count + 1 };
  //   setData(newData);
  // };

  // const calculatorNumber = useMemo(() => {
  //   console.log('rerender');
  //   return number * 10;
  // }, [number]);

  // const handleDemoHook = useCallback(() => {
  //   console.log('prop of demo hook');
  // }, [number]);

  return (
    <>
      <MyContext.Provider value={valueContext}>
        <h1>Page Context</h1>
        <div>Count number: {state.count}</div>
        <Parent />
        <DemoComponent />
      </MyContext.Provider>
    </>
  );
};

export default PageContext;
