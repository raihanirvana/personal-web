import { render, screen, fireEvent } from '@testing-library/react';
import Header from './NavigationBar.component';

describe('Header Component', () => {
  it('matches the snapshot', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('changes active navigation when a button is clicked', () => {
    render(<Header />);

    const buttons = screen.getAllByRole('button');

    expect(buttons.length).toBeGreaterThan(0);

    fireEvent.click(buttons[0]);
    expect(buttons[0]).toHaveClass('overflow-visible w-36');

    fireEvent.click(buttons[1]);
    expect(buttons[1]).toHaveClass('overflow-visible w-36');
    expect(buttons[0]).not.toHaveClass('overflow-visible w-36');
  });
});
