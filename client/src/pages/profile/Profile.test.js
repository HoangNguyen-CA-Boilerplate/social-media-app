import { render, screen } from '../../test-utils';
import Profile from './Profile';
import mockUser from '../../mocks/mockUser';

describe('Profile', () => {
  it('Renders correctly', async () => {
    render(<Profile username={mockUser.username}></Profile>, {
      isAuth: true,
    });

    expect(await screen.findAllByTestId('spinner')).toHaveLength(2);
    expect(
      await screen.findByRole('heading', { name: `${mockUser.username}` })
    ).toBeInTheDocument();
  });
});
