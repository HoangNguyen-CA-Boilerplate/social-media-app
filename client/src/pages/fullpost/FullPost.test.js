import { render, screen } from '../../test-utils';
import FullPost from './FullPost';

describe('FullPost', () => {
  it('Renders correctly', async () => {
    render(<FullPost />);
    expect(
      await screen.findByRole('heading', { name: /Post/i })
    ).toBeInTheDocument();
  });
});
