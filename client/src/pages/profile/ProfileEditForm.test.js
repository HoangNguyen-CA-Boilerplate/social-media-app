import { render, screen } from '../../test-utils';
import ProfileEditForm from './ProfileEditForm';
import userEvent from '@testing-library/user-event';
import { waitFor } from '@testing-library/react';

describe('profile/ProfileEditForm', () => {
  let submitBtn;
  let displayNameInput;
  let bioInput;
  let mockSubmit;

  beforeEach(() => {
    mockSubmit = jest.fn();
    render(<ProfileEditForm onSubmit={mockSubmit} />);
    submitBtn = screen.getByRole('button', { name: /Save/i });
    displayNameInput = screen.getByLabelText(/Display Name:/i);
    bioInput = screen.getByLabelText(/Bio:/i);
  });

  it('Should display error if fields are empty', async () => {
    userEvent.click(submitBtn);
    expect(await screen.findAllByRole('alert')).toHaveLength(1);
  });

  it('Should display error if display name is invalid', async () => {
    const displayName = 'C'.repeat(16);
    userEvent.type(displayNameInput, displayName);
    expect(displayNameInput).toHaveValue(displayName);

    userEvent.click(submitBtn);

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledTimes(0);
      expect(screen.getByRole('alert')).toHaveTextContent(/display name/i);
    });
  });

  it('Should be submit form if fields are valid', async () => {
    const displayName = 'C'.repeat(5);
    const bio = 'C'.repeat(1);

    userEvent.type(displayNameInput, displayName);
    userEvent.type(bioInput, bio);

    expect(displayNameInput).toHaveValue(displayName);
    expect(bioInput).toHaveValue(bio);

    userEvent.click(submitBtn);

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledTimes(1);
      expect(screen.queryAllByRole('alert')).toHaveLength(0);
    });
  });
});
