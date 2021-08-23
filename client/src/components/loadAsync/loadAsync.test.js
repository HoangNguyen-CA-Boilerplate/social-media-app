import { render, screen } from '../../test-utils';
import LoadAsync from './LoadAsync';

describe('LoadAsync', () => {
  const dummyText = 'Hello World';
  const dummyError = 'Error';

  it('Renders correctly without error/loading state', () => {
    render(
      <LoadAsync>
        <h1>{dummyText}</h1>
      </LoadAsync>
    );
    expect(
      screen.getByRole('heading', { name: dummyText })
    ).toBeInTheDocument();
  });

  it('Renders correctly with loading state', () => {
    render(
      <LoadAsync loading={true}>
        <h1>{dummyText}</h1>
      </LoadAsync>
    );
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: dummyText })).toBeNull();
  });

  it('Renders correctly with error state', () => {
    render(
      <LoadAsync loading={true} error={dummyError}>
        <h1>{dummyText}</h1>
      </LoadAsync>
    );

    expect(screen.getByText(dummyError)).toBeInTheDocument();
    expect(screen.queryByTestId('spinner')).toBeNull();
    expect(screen.queryByRole('heading', { name: dummyText })).toBeNull();
  });
});
