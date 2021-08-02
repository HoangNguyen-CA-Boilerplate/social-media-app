import { render, screen } from '../../test-utils';
import AuthScreen from '../AuthScreen';

describe('auth/AuthScreen', () => {
  it('Renders correctly', async () => {
    render(<AuthScreen />);

    expect(screen.getByRole('button', { name: /Log In/i })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Sign Up/i })
    ).toBeInTheDocument();
  });
});
