import { render, screen } from './test-utils';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  describe('App Routing', () => {
    it('Routing to login', () => {
      render(<App />);

      userEvent.click(screen.getByRole('button', { name: /Log In/i }));
      expect(
        screen.getByRole('heading', { name: /Log in/i })
      ).toBeInTheDocument();
    });

    it('Routing to signup', () => {
      render(<App />);

      userEvent.click(screen.getByRole('button', { name: /Sign Up/i }));
      expect(
        screen.getByRole('heading', { name: /Sign up/i })
      ).toBeInTheDocument();
    });
  });

  describe('App workflows', () => {
    it('Login workflow', async () => {
      render(<App />, { route: '/login' });
      const submitBtn = screen.getByRole('button', { name: /Submit/i });
      expect(
        screen.getByRole('heading', { name: /Log in/i })
      ).toBeInTheDocument();

      userEvent.type(screen.getByLabelText(/Email:/i), 'bob@gmail.com');
      userEvent.type(screen.getByLabelText(/Password:/i), 'bobob');
      userEvent.click(submitBtn);

      expect(
        await screen.findByRole('heading', { name: /Home/i })
      ).toBeInTheDocument();
    });

    it('Signup workflow', async () => {
      render(<App />, { route: '/signup' });
      const submitBtn = screen.getByRole('button', { name: /Submit/i });
      expect(
        screen.getByRole('heading', { name: /Sign up/i })
      ).toBeInTheDocument();

      userEvent.type(screen.getByLabelText(/Username:/i), 'bobob');
      userEvent.type(screen.getByLabelText(/Email:/i), 'bob@gmail.com');
      userEvent.type(screen.getByLabelText(/Password:/i), 'bobob');
      userEvent.click(submitBtn);

      expect(
        await screen.findByRole('heading', { name: /Home/i })
      ).toBeInTheDocument();
    });
  });
});
