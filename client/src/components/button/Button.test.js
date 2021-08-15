import Button from './Button';
import { render, screen } from '../../test-utils';

describe('components/Button', () => {
  it('renders correctly', () => {
    render(<Button>Click Me!</Button>);
    expect(screen.getByText('Click Me!')).toBeInTheDocument();
  });
});
