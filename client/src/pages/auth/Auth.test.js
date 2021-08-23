import { render, screen } from '../../test-utils';
import Auth from './Auth';

describe('Auth', () => {
  it('Renders correctly', async () => {
    render(<Auth></Auth>);
    expect(
      await screen.findByRole('heading', { name: /Happening Now/i })
    ).toBeInTheDocument();
  });
});
