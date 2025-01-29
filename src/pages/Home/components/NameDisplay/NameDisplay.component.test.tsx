import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import NameDisplay from './NameDisplay.component';

jest.mock('react-simple-typewriter', () => ({
  useTypewriter: ({ words, onLoopDone }: { words: string[], onLoopDone?: () => void }) => {
    React.useEffect(() => {
      if (onLoopDone) {
        setTimeout(onLoopDone, 10);
      }
    }, [onLoopDone]);

    return [words[0]];
  }
}));

describe('NameDisplay Component', () => {
  it('renders correctly after delay and matches snapshot', async () => {
    const { asFragment } = render(<NameDisplay firstName="Raihan" secondName="Ganteng" />);
  
    await waitFor(() => expect(screen.getByText('Ganteng')).toBeInTheDocument(), { timeout: 1000 });
  
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays first name immediately', () => {
    render(<NameDisplay firstName="Raihan" secondName="Raihan" />);

    expect(screen.getByText('Raihan')).toBeInTheDocument();
  });

  it('displays second name after a delay', async () => {
    render(<NameDisplay firstName="Raihan" secondName="Ganteng" />);

    await waitFor(() => expect(screen.getByText('Ganteng')).toBeInTheDocument(), { timeout: 1000 });
  });
});
