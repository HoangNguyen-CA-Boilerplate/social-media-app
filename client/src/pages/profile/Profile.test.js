import { render, screen } from '../../test-utils';
import Profile from './Profile';
import mockUser from '../../mocks/mockUser';

describe('Profile', () => {
  it('Renders correctly', async () => {
    render(<Profile></Profile>, {
      isAuth: true,
      route: `/users/${mockUser.username}`,
    });

    expect(await screen.findAllByTestId('spinner')).toHaveLength(2);
    expect(
      await screen.findByRole('heading', { name: `${mockUser.username}` })
    ).toBeInTheDocument();
  });
});
