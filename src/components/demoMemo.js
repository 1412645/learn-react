import React from "react";

// const DemoMemo = ({ count, position }) => {
//   console.log("demo memo");

//   return (
//     <div>
//       <div>DemoMemo: {count}</div>
//       <div>DemoMemo: {position}</div>
//     </div>
//   );
// };

// function areEqual(prevProps, nextProps) {
//   return false;
// }

// export default React.memo(DemoMemo, areEqual);

const DemoMemo = ({ position, handleUpdatePosition, setPosition }) => {
  console.log("demo memo");
  const handleClick = () => {
    setPosition("Update");
  };

  return (
    <div>
      <div>DemoMemo: {position}</div>
      <button onClick={handleClick}>Click update</button>
    </div>
  );
};

export default React.memo(DemoMemo);
