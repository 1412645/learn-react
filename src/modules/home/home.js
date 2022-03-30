import React, { useRef, useState } from 'react';
import DemoRef from '../../components/demoRef';

// const Home = () => {
//   const [elmDemo, setElmDemo] = useState(null);
//   const elmDemoRef = useRef(null);
//   const handleOnClick = () => {
//     console.log('elmDemoRef: ', elmDemoRef);
//     console.log('elmDemo: ', elmDemo);
//   };

//   const getCallbackRef = (elm) => {
//     console.log('elm: ', elm);
//     setElmDemo(elm);
//   };

//   return (
//     <>
//       <h1>Home page</h1>
//       <div>Content home page</div>
//       <button onClick={handleOnClick}>Get Ref</button>
//       <DemoRef getCallbackRef={getCallbackRef} />
//     </>
//   );
// };

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.elmDemo = React.createRef();
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleEventBubbling = this.handleEventBubbling.bind(this);
    this.handleEventBubblingParent = this.handleEventBubblingParent.bind(this);
  }
  handleOnClick = () => {
    console.log('elm: ', this.elmDemo);
  };

  handleEventBubbling = () => {
    console.log('CHILD ELEMENT');
  };

  handleEventBubblingParent = () => {
    console.log('PARENT ELEMENT');
  };

  render() {
    return (
      <>
        <h1>Home page</h1>
        <div>Content home page</div>
        <button onClick={this.handleOnClick}>Get Ref</button>
        <DemoRef ref={this.elmDemo} />

        <div>Demo Event bubbling</div>
        <div onClick={this.handleEventBubblingParent}>
          <button onClick={this.handleEventBubbling}>Click</button>
        </div>
      </>
    );
  }
}

export default Home;
