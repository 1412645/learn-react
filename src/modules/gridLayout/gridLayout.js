import React, { useEffect } from 'react';
import styled from 'styled-components';
import { DatabaseTestService } from '../../services/databaseTest';

const GridLayout = () => {
  const getDemoFromDatabase = () => {
    DatabaseTestService.init().then(async () => {
      console.log('created DB demo in indexedDB');
      const demoData = await DatabaseTestService.getAll();
      console.log('demoData: ', demoData);
    });
  };

  const handleAddData = async () => {
    const dataDemos = await DatabaseTestService.add('Le Hoang Vu');
    console.log('dataDemos: ', dataDemos);
  };

  const handleDeleteData = async () => {
    const deleteResult = await DatabaseTestService.deleteById(1);
    console.log('dataDemos after delete: ', deleteResult);
  };

  const handleClearData = () => {
    DatabaseTestService.clearAll();
  };

  useEffect(() => {
    getDemoFromDatabase();
  }, []);

  return (
    <ContainerLayout>
      <button onClick={handleAddData}>Add Data</button>
      <button onClick={handleDeleteData}>Delete data</button>
      <button onClick={handleClearData}>Clear all data</button>
      <h1>GridLayout</h1>
      <h2>Example 1</h2>
      <WrapperContainer1>
        <Item1 className='first-item'>1</Item1>
        <Item1 className='second-item'>2</Item1>
        <Item1>3</Item1>
        <Item1>4</Item1>
        <Item1>5</Item1>
        <Item1>6</Item1>
        <Item1>7</Item1>
        <Item1>8</Item1>
        <Item1>9</Item1>
        <Item1>10</Item1>
      </WrapperContainer1>

      <h2>Example 2 with grid-area Property</h2>
      <WrapperContainer2>
        <Item2>1</Item2>
        <Item2>2</Item2>
        <Item2>3</Item2>
        <Item2>4</Item2>
        <Item2>5</Item2>
        <Item2>6</Item2>
        <Item2>7</Item2>
        <Item2 className='eight-item'>8</Item2>
        <Item2>9</Item2>
        <Item2>10</Item2>
        <Item2>11</Item2>
        <Item2>12</Item2>
        <Item2>13</Item2>
        <Item2>14</Item2>
        <Item2>15</Item2>
      </WrapperContainer2>

      <h2>Example 3 with Naming grid item</h2>
      <WrapperContainer3>
        <Item3 className='first-item'>1</Item3>
        <Item3>2</Item3>
        <Item3>3</Item3>
        <Item3>4</Item3>
        <Item3>5</Item3>
        <Item3>6</Item3>
        <Item3>7</Item3>
        <Item3>8</Item3>
        <Item3>9</Item3>
        <Item3>10</Item3>
        <Item3>11</Item3>
        <Item3>12</Item3>
        <Item3>13</Item3>
        <Item3>14</Item3>
        <Item3>15</Item3>
      </WrapperContainer3>
      <br />
      <WrapperContainer4>
        <Item3 className='header'>Header</Item3>
        <Item3 className='menu'>Menu</Item3>
        <Item3 className='main'>Main</Item3>
        <Item3 className='right'>Right</Item3>
        <Item3 className='footer'>Footer</Item3>
      </WrapperContainer4>

      <h2>Example 4</h2>
      <WrapperContainer5>
        <Item1 className='item-first-ex5'>1</Item1>
        <Item1>2</Item1>
        <Item1>3</Item1>
        <Item1>4</Item1>
        <Item1>5</Item1>
        <Item1>6</Item1>
        <Item1>7</Item1>
        <Item1>8</Item1>
        <Item1>9</Item1>
        <Item1>10</Item1>
        <Item1>11</Item1>
        <Item1>12</Item1>
        <Item1>13</Item1>
        <Item1>14</Item1>
        <Item1>15</Item1>
        <Item1>16</Item1>
      </WrapperContainer5>
    </ContainerLayout>
  );
};

const ContainerLayout = styled.div``;

const WrapperContainer5 = styled.div`
  width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  // gap: 10px;
  background-color: green;
  padding: 10px;
  // column-gap: 10px;
  // row-gap: 10px;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  grid-auto-flow: column;
`;

const WrapperContainer1 = styled.div`
  width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: 100px 50px 50px;
  grid-auto-flow: column;
  background-color: green;
  padding: 10px;
`;

const WrapperContainer2 = styled.div`
  width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  grid-template-rows: 50px 50px 50px;
  grid-auto-flow: row;
  background-color: green;
  padding: 10px;
  gap: 10px;
`;

const WrapperContainer3 = styled.div`
  width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-areas: 'myItem myItem myItem myItem .' 'myItem myItem myItem myItem .';
  // grid-template-columns: auto auto auto auto auto auto;
  grid-template-rows: 50px 50px 50px;
  grid-auto-flow: row;
  background-color: green;
  padding: 10px;
  gap: 10px;
`;

const WrapperContainer4 = styled.div`
  width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 50px 50px 50px;
  grid-template-areas:
    'myHeader myHeader myHeader myHeader'
    'myMenu myMain myMain myRight'
    'myMenu myFooter myFooter myFooter';
  grid-auto-flow: row;
  background-color: green;
  padding: 10px;
  gap: 10px;
`;

const Item1 = styled.div`
  border: 1px solid gray;
  text-align: center;
  background-color: white;
  padding: 10px;

  // &.first-item {
  //   grid-column-start: 1;
  //   grid-column-end: 3;
  //   grid-row-start: 1;
  //   grid-row-end: 3;
  // }

  &.item-first-ex5 {
    // grid-row: 1 / 4;
    // grid-row: 1 / span 3;
    // grid-column: 1 / 2;
    // grid-row-start: 1;
    // grid-row-end: 4;
    // grid-column-start: 1;
    // grid-column-end: 2;
    // grid-area: 1 / 1 / 4 / 2;
    grid-area: 1 / 1 / span 3 / span 1;
  }
`;

const Item2 = styled.div`
  border: 1px solid gray;
  text-align: center;
  background-color: white;
  padding: 10px;

  &.eight-item {
    // grid-area: 1 / 2 / 5 / 6;
    grid-area: 1 / 2 / span 4 / span 4;
  }
`;

const Item3 = styled.div`
  border: 1px solid gray;
  text-align: center;
  background-color: white;
  padding: 10px;

  &.first-item {
    grid-area: myItem;
  }

  &.header {
    grid-area: myHeader;
  }

  &.menu {
    grid-area: myMenu;
  }

  &.main {
    grid-area: myMain;
  }

  &.right {
    grid-area: myRight;
  }

  &.footer {
    grid-area: myFooter;
  }
`;

export default GridLayout;
