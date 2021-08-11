import { render, screen } from '../../test-utils';
import SignupForm from './SignupForm';
import userEvent from '@testing-library/user-event';
import { waitFor } from '@testing-library/react';

describe('auth/SignupForm', () => {
  let submitBtn;
  let usernameInput;
  let emailInput;
  let passwordInput;
  let mockSubmit;

  beforeEach(() => {
    mockSubmit = jest.fn();
    render(<SignupForm onSubmit={mockSubmit} />);
    submitBtn = screen.getByRole('button', { name: /Submit/i });
    usernameInput = screen.getByLabelText(/Username:/i);
    emailInput = screen.getByLabelText(/Email:/i);
    passwordInput = screen.getByLabelText(/Password:/i);
  });

  it('Should display error if fields are empty', async () => {
    userEvent.click(submitBtn);
    expect(await screen.findAllByRole('alert')).toHaveLength(3);
  });

  it('Should display error if email is invalid', async () => {
    userEvent.type(usernameInput, 'bobob');
    userEvent.type(emailInput, 'bob');
    userEvent.type(passwordInput, 'bobob');

    expect(usernameInput).toHaveValue('bobob');
    expect(emailInput).toHaveValue('bob');
    expect(passwordInput).toHaveValue('bobob');

    userEvent.click(submitBtn);

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledTimes(0);
      expect(screen.getByRole('alert')).toHaveTextContent(/email/i);
    });
  });

  it('Should display error if username is invalid', async () => {
    userEvent.type(usernameInput, 'bo');
    userEvent.type(emailInput, 'bob@gmail.com');
    userEvent.type(passwordInput, 'bobob');

    expect(usernameInput).toHaveValue('bo');
    expect(emailInput).toHaveValue('bob@gmail.com');
    expect(passwordInput).toHaveValue('bobob');

    userEvent.click(submitBtn);

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledTimes(0);
      expect(screen.getByRole('alert')).toHaveTextContent(/username/i);
    });
  });

  it('Should display error if password is invalid', async () => {
    userEvent.type(usernameInput, 'bobob');
    userEvent.type(emailInput, 'bob@gmail.com');
    userEvent.type(passwordInput, 'bob');

    expect(usernameInput).toHaveValue('bobob');
    expect(emailInput).toHaveValue('bob@gmail.com');
    expect(passwordInput).toHaveValue('bob');

    userEvent.click(submitBtn);
    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledTimes(0);
      expect(screen.getByRole('alert')).toHaveTextContent(/password/i);
    });
  });

  it('Should be submit form if fields are valid', async () => {
    userEvent.type(usernameInput, 'bobob');
    userEvent.type(emailInput, 'bob@gmail.com');
    userEvent.type(passwordInput, 'bobob');

    expect(usernameInput).toHaveValue('bobob');
    expect(emailInput).toHaveValue('bob@gmail.com');
    expect(passwordInput).toHaveValue('bobob');

    userEvent.click(submitBtn);

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
