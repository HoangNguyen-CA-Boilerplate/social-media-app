import { render, screen } from '../../test-utils';
import Home from './Home';

describe('Home', () => {
  it('Renders correctly', async () => {
    render(<Home></Home>, { isAuth: true });
    expect(await screen.findByTestId('spinner')).toBeInTheDocument();
    expect(
      await screen.findByRole('heading', { name: /Home/i })
    ).toBeInTheDocument();
    screen.debug();
  });
});
