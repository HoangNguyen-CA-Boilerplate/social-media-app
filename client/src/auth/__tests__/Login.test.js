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

    userEvent.type(emailInput, 'bob@gmail.com');
    userEvent.type(passwordInput, 'bobob');
    expect(emailInput).toHaveValue('bob@gmail.com');
    expect(passwordInput).toHaveValue('bobob');
  });
});
