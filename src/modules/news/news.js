import React, { useEffect } from 'react';

const News = () => {
  useEffect(() => {
    console.log('useEffect');
    return () => {
      console.log('clean up');
    };
  });
  return (
    <>
      <h1>News page</h1>
      <div>Content news page</div>
    </>
  );
};

export default News;
