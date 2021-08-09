import { render, screen } from '../../test-utils';
import LoginForm from './LoginForm';
import userEvent from '@testing-library/user-event';
import { waitFor } from '@testing-library/react';

describe('auth/SignupForm', () => {
  let submitBtn;
  let emailInput;
  let passwordInput;
  let form;
  let mockSubmit;

  beforeEach(() => {
    mockSubmit = jest.fn();
    render(<LoginForm onSubmit={mockSubmit} />);
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
    userEvent.type(emailInput, 'bob');
    userEvent.type(passwordInput, 'bobob');

    expect(emailInput).toHaveValue('bob');
    expect(passwordInput).toHaveValue('bobob');

    userEvent.click(submitBtn);

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledTimes(0);
      expect(screen.getByRole('alert')).toHaveTextContent(/email/i);
    });
  });

  it('Should display error if password is invalid', async () => {
    userEvent.type(emailInput, 'bob@gmail.com');
    userEvent.type(passwordInput, 'bob');

    expect(emailInput).toHaveValue('bob@gmail.com');
    expect(passwordInput).toHaveValue('bob');

    userEvent.click(submitBtn);
    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledTimes(0);
      expect(screen.getByRole('alert')).toHaveTextContent(/password/i);
    });
  });

  it('Should be submit form if fields are valid', async () => {
    form.onsubmit = null;

    userEvent.type(emailInput, 'bob@gmail.com');
    userEvent.type(passwordInput, 'bobob');

    expect(emailInput).toHaveValue('bob@gmail.com');
    expect(passwordInput).toHaveValue('bobob');

    userEvent.click(submitBtn);

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
