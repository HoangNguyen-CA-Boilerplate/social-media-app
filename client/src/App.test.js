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

  it('Routing to signup works correctly', () => {
    window.history.pushState({}, 'AuthScreen', '/');
    render(<App />);

    userEvent.click(screen.getByRole('button', { name: /Sign Up/i }));
    expect(screen.getByTestId('Signup')).toBeInTheDocument();
  });

  it('Routing to home works correctly', () => {
    window.history.pushState({}, 'Home Page', '/home');
    render(<App />, { isAuth: true });
    expect(screen.getByTestId('Home')).toBeInTheDocument();
  });

  it('Login workflow', async () => {
    window.history.pushState({}, 'Login Page', '/login');
    render(<App />);

    userEvent.click(screen.getByRole('button', { name: /Submit/i }));

    expect(screen.getByTestId('Login')).toBeInTheDocument(); // test login error

    userEvent.type(screen.getByLabelText(/Email:/i), 'bob@gmail.com');
    userEvent.type(screen.getByLabelText(/Password:/i), 'bobob');

    userEvent.click(screen.getByRole('button', { name: /Submit/i }));

    const logoutBtn = await screen.findByRole('button', { name: /Logout/i }); // test login success
    expect(logoutBtn).toBeInTheDocument();
  });

  it('Signup workflow', async () => {
    window.history.pushState({}, 'Signup Page', '/signup');
    render(<App />);

    userEvent.click(screen.getByRole('button', { name: /Submit/i }));

    expect(screen.getByTestId('Signup')).toBeInTheDocument(); // test signup error

    userEvent.type(screen.getByLabelText(/Email:/i), 'bob@gmail.com');
    userEvent.type(screen.getByLabelText(/Password:/i), 'bobob');

    userEvent.click(screen.getByRole('button', { name: /Submit/i }));

    const logoutBtn = await screen.findByRole('button', { name: /Logout/i }); // test signup success
    expect(logoutBtn).toBeInTheDocument();
  });
});
