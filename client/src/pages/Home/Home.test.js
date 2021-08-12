import { render, screen } from '../../test-utils';
import Home from './Home';

describe('Home', () => {
  it('Renders correctly', async () => {
    render(<Home></Home>, { isAuth: true });
    expect(await screen.findByTestId('spinner')).toBeInTheDocument();
    expect(await screen.findByText(/post/i)).toBeInTheDocument();

    screen.debug();
  });
});
