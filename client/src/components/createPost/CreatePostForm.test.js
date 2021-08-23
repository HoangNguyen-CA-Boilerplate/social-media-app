import CreatePostForm from './CreatePostForm';

import { render, screen } from '../../test-utils';
import userEvent from '@testing-library/user-event';
import { waitFor } from '@testing-library/react';

describe('CreatePostForm', () => {
  let submitBtn;
  let textInput;
  let mockSubmit;

  beforeEach(() => {
    mockSubmit = jest.fn();
    render(<CreatePostForm onSubmit={mockSubmit} />);
    submitBtn = screen.getByRole('button', { name: /Post/i });
    textInput = screen.getByRole('textbox');
  });

  it('Should display error if fields are empty', async () => {
    userEvent.click(submitBtn);
    expect(await screen.findAllByRole('alert')).toHaveLength(1);
  });

  it('Should display error if text is invalid', async () => {
    userEvent.click(submitBtn);
    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledTimes(0);
      expect(screen.getByRole('alert')).toHaveTextContent(/text/i);
    });
  });

  it('Should be submit form if fields are valid', async () => {
    userEvent.type(textInput, 'I love this app');
    expect(textInput).toHaveValue('I love this app');
    userEvent.click(submitBtn);
    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
