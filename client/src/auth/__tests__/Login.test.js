import { render, screen } from '../../test-utils';
import Login from '../Login';
import userEvent from '@testing-library/user-event';

describe('auth/Login', () => {
  it('Renders correctly', () => {
    render(<Login />);
    const emailInput = screen.getByLabelText(/Email:/i);
    const passwordInput = screen.getByLabelText(/Password:/i);
    const submitBtn = screen.getByRole('button', { name: /Submit/i });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();

    userEvent.type(emailInput, 'email@gmail.com');
    userEvent.type(passwordInput, 'password');
    expect(emailInput).toHaveValue('email@gmail.com');
    expect(passwordInput).toHaveValue('password');
  });

  it('Should display error if fields are empty', async () => {
    render(<Login />);
    const submitBtn = screen.getByRole('button', { name: /Submit/i });

    userEvent.click(submitBtn);

    expect(await screen.findAllByRole('alert')).toHaveLength(2);
  });
});
