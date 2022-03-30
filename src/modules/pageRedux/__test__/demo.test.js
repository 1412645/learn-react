import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PageRedux from '../pageRedux';
import '@testing-library/jest-dom/extend-expect';
import { store } from '../../../store';

const ReduxWrapper = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

beforeEach(() => {
  const component = render(<PageRedux />, { wrapper: ReduxWrapper });
});

// it('Input should be inital empty', () => {
//   const emailInputElm = screen.getByRole('textbox');
//   const passwordInputElm = screen.getByLabelText('Password');
//   const confirmPasswordInputElm = screen.getByLabelText('Confirm Password');
//   expect(emailInputElm.value).toBe('');
//   expect(passwordInputElm.value).toBe('');
//   expect(confirmPasswordInputElm.value).toBe('');
// });

describe('Todos', () => {
  it('Input should be inital empty', () => {
    const emailInputElm = screen.getByRole('textbox');
    const passwordInputElm = screen.getByLabelText('Password');
    const confirmPasswordInputElm = screen.getByLabelText('Confirm Password');
    expect(emailInputElm.value).toBe('');
    expect(passwordInputElm.value).toBe('');
    expect(confirmPasswordInputElm.value).toBe('');
  });
});
