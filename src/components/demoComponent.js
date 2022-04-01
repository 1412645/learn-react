import React from 'react';

const DemoComponent = () => {
  console.log('DemoComponent');
  return (
    <div>
      <div>DemoComponent</div>
    </div>
  );
};

export default React.memo(DemoComponent);
