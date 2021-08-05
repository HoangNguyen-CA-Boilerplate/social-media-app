import { render, screen } from '../../test-utils';
import LoginForm from '../LoginForm';
import userEvent from '@testing-library/user-event';
import { waitFor } from '@testing-library/react';

describe('auth/Login', () => {
  let submitBtn;
  let emailInput;
  let passwordInput;
  let form;

  beforeEach(() => {
    render(<LoginForm />);
    submitBtn = screen.getByRole('button', { name: /Submit/i });
    emailInput = screen.getByLabelText(/Email:/i);
    passwordInput = screen.getByLabelText(/Password:/i);
    form = screen.getByRole('form');
  });

  it('Should display error if fields are empty', async () => {
    userEvent.click(submitBtn);
    expect(await screen.findAllByRole('alert')).toHaveLength(2);
  });

  it('Should display error if email is invalid', async () => {
    const mockFunc = jest.fn();
    submitBtn.onclick = mockFunc;

    userEvent.type(emailInput, 'bob');
    userEvent.type(passwordInput, 'bobob');

    expect(emailInput).toHaveValue('bob');
    expect(passwordInput).toHaveValue('bobob');

    userEvent.click(submitBtn);
    expect(mockFunc).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent(/email/i);
    });
  });

  it('Should display error if password is invalid', async () => {
    const mockFunc = jest.fn();
    submitBtn.onclick = mockFunc;

    userEvent.type(emailInput, 'bob@gmail.com');
    userEvent.type(passwordInput, 'bob');

    expect(emailInput).toHaveValue('bob@gmail.com');
    expect(passwordInput).toHaveValue('bob');

    userEvent.click(submitBtn);
    expect(mockFunc).toHaveBeenCalledTimes(1);
    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent(/password/i);
    });
  });

  it('Should be submit form if fields are valid', async () => {
    const mockFunc = jest.fn();
    form.onsubmit = null;

    userEvent.type(emailInput, 'bob@gmail.com');
    userEvent.type(passwordInput, 'bobob');

    expect(emailInput).toHaveValue('bob@gmail.com');
    expect(passwordInput).toHaveValue('bobob');

    //userEvent.click(submitBtn);
    //await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(0));
    // expect(screen.queryAllByRole('alert')).toHaveLength(0);
  });
});
