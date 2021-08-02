import { render, screen } from './test-utils';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  it('Renders correctly', () => {
    render(<App />);
    expect(screen.getByTestId('AuthScreen')).toBeInTheDocument();
  });

  it('Routing to login works correctly', () => {
    window.history.pushState({}, 'AuthScreen', '/');
    render(<App />);

    userEvent.click(screen.getByRole('button', { name: /Log In/i }));
    expect(screen.getByTestId('Login')).toBeInTheDocument();
  });

  it('Routing to register works correctly', () => {
    window.history.pushState({}, 'AuthScreen', '/');
    render(<App />);

    userEvent.click(screen.getByRole('button', { name: /Sign Up/i }));
    expect(screen.getByTestId('Register')).toBeInTheDocument();
  });

  it('Routing to home works correctly', () => {
    window.history.pushState({}, 'Home Page', '/home');
    render(<App />);
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
});
