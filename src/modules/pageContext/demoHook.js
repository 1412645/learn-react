import React, { useContext } from 'react';
import MyContext from '../../contexts/demoContext';

// const DemoHook = ({ handleDemoHook }) => {
//   const context = useContext(MyContext);
//   console.log('demo hook');
//   console.log('context: ', context);
//   return (
//     <div>
//       <div>Demo hook</div>
//     </div>
//   );
// };

class DemoHook extends React.Component {
  // static contextType = MyContext;
  // componentDidMount() {
  //   console.log('demo hook');
  //   console.log('context: ', this.context);
  // }
  render() {
    return (
      <div>
        <MyContext.Consumer>
          {(content) => {
            console.log('context: ', content);
            return <div>Demo hook {content.count}</div>;
          }}
        </MyContext.Consumer>
      </div>
    );
  }
}

// DemoHook.contextType = MyContext;

export default React.memo(DemoHook);
