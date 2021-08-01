import { render, screen } from '../../test-utils';
import AuthScreen from '../AuthScreen';

describe('auth/AuthScreen', () => {
  it('Renders correctly', () => {
    render(<AuthScreen />);

    expect(screen.getByText('Sign Up')).toBeInTheDocument();
    expect(screen.getByText('Log In')).toBeInTheDocument();
  });
});
