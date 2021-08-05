import { render, screen } from './test-utils';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  it('Renders correctly', () => {
    render(<App />);
    expect(screen.getByTestId('AuthScreen')).toBeInTheDocument();
  });

  it('Routing to login works correctly', () => {
    render(<App />);

    userEvent.click(screen.getByRole('button', { name: /Log In/i }));
    expect(screen.getByTestId('Login')).toBeInTheDocument();
  });

  it('Routing to signup works correctly', () => {
    render(<App />);

    userEvent.click(screen.getByRole('button', { name: /Sign Up/i }));
    expect(screen.getByTestId('Signup')).toBeInTheDocument();
  });

  it('Routing to home works correctly', () => {
    render(<App />, { isAuth: true, route: '/home' });
    expect(screen.getByTestId('Home')).toBeInTheDocument();
  });

  it('Login workflow', async () => {
    render(<App />, { route: '/login' });

    userEvent.click(screen.getByRole('button', { name: /Submit/i }));

    expect(screen.getByTestId('Login')).toBeInTheDocument(); // test login error

    userEvent.type(screen.getByLabelText(/Email:/i), 'bob@gmail.com');
    userEvent.type(screen.getByLabelText(/Password:/i), 'bobob');

    userEvent.click(screen.getByRole('button', { name: /Submit/i }));

    const logoutBtn = await screen.findByRole('button', { name: /Logout/i }); // test login success
    expect(logoutBtn).toBeInTheDocument();
  });

  it('Signup workflow', async () => {
    render(<App />, { route: '/signup' });

    userEvent.click(screen.getByRole('button', { name: /Submit/i }));

    expect(screen.getByTestId('Signup')).toBeInTheDocument(); // test signup error

    userEvent.type(screen.getByLabelText(/Username:/i), 'bobob');
    userEvent.type(screen.getByLabelText(/Email:/i), 'bob@gmail.com');
    userEvent.type(screen.getByLabelText(/Password:/i), 'bobob');

    userEvent.click(screen.getByRole('button', { name: /Submit/i }));

    const logoutBtn = await screen.findByRole('button', { name: /Logout/i }); // test signup success
    expect(logoutBtn).toBeInTheDocument();
  });
});
