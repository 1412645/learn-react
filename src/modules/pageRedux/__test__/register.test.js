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

test('Input should be inital empty', () => {
  const emailInputElm = screen.getByRole('textbox');
  const passwordInputElm = screen.getByLabelText('Password');
  const confirmPasswordInputElm = screen.getByLabelText('Confirm Password');
  expect(emailInputElm.value).toBe('');
  expect(passwordInputElm.value).toBe('');
  expect(confirmPasswordInputElm.value).toBe('');
});

test('should be able to type an email', () => {
  const emailInputElm = screen.getByRole('textbox', {
    name: /email/i,
  });
  userEvent.type(emailInputElm, 'selena@gmail.com');
  expect(emailInputElm.value).toBe('selena@gmail.com');
});

test('should be able to type an password', () => {
  const passwordInputElm = screen.getByLabelText('Password');
  userEvent.type(passwordInputElm, 'password');
  expect(passwordInputElm.value).toBe('password');
});

test('should be able to type an confrim password', () => {
  const confirmPasswordInputElm = screen.getByLabelText('Confirm Password');
  userEvent.type(confirmPasswordInputElm, 'password');
  expect(confirmPasswordInputElm.value).toBe('password');
});

test('should show email error message on invalid email', () => {
  const emailErrorElm = screen.queryByText(/the email you input is invalid/i);

  const emailInputElm = screen.getByRole('textbox', {
    name: /email/i,
  });

  const submitBtn = screen.getByRole('button', {
    name: /submit/i,
  });

  expect(emailErrorElm).not.toBeInTheDocument();

  userEvent.type(emailInputElm, 'selenagmail.com');
  userEvent.click(submitBtn);

  const emailErrorElmAgain = screen.queryByText(
    /the email you input is invalid/i
  );
  expect(emailErrorElmAgain).toBeInTheDocument();
});
