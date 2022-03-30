import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import PageRedux from '../pageRedux';
import '@testing-library/jest-dom/extend-expect';
import { store } from '../../../store';

let getByTestId;

const ReduxWrapper = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

beforeEach(() => {
  const component = render(<PageRedux />, { wrapper: ReduxWrapper });
  getByTestId = component.getByTestId;
});

test('page header render with correct text', () => {
  const headerElm = getByTestId('header');
  expect(headerElm.textContent).toBe('Page Redux');
});

test('counter initally start with text of 0', () => {
  const counterElm = getByTestId('counter');
  expect(counterElm.textContent).toBe('0');
});

test('input contains init value 1', () => {
  const inputElm = getByTestId('input-counter');
  expect(inputElm.value).toBe('1');
});

test('change value of input work correctly', () => {
  const inputElm = getByTestId('input-counter');
  expect(inputElm.value).toBe('1');

  fireEvent.change(inputElm, {
    target: {
      value: '5',
    },
  });
  expect(inputElm.value).toBe('5');
});

// test('click on plus button add 1 to counter', () => {
//   const plusElm = getByTestId('btn-plus');
//   const counterElm = getByTestId('counter');

//   expect(counterElm.textContent).toBe('0');

//   fireEvent.click(plusElm);

//   expect(counterElm.textContent).toBe('1');
// });

// test('click on sub button sub 1 to counter', () => {
//   const { getByTestId } = render(<PageRedux />, { wrapper: ReduxWrapper });

//   const subElm = getByTestId('btn-sub');
//   const counterElm = getByTestId('counter');

//   expect(counterElm.textContent).toBe('0');

//   fireEvent.click(subElm);

//   expect(counterElm.textContent).toBe('-1');
// });
