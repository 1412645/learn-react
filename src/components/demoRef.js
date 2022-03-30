import React from 'react';

const DemoRef = React.forwardRef((props, ref) => {
  return (
    <div>
      <div ref={ref} className='demo-ref'>
        Demo Ref
      </div>
    </div>
  );
});

// const DemoRef = ({ getCallbackRef }) => {
//   return (
//     <div>
//       <div ref={getCallbackRef} className='demo-ref'>
//         Demo Ref
//       </div>
//     </div>
//   );
// };

// class DemoRef extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <div ref={this.ref} className='demo-ref'>
//           Demo Ref
//         </div>
//       </div>
//     );
//   }
// }

export default DemoRef;
