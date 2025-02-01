import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './NavigationBar.component';

describe('Header Component', () => {
  it('matches the snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Header activeBar={1} />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('changes active navigation when a link is clicked', () => {
    render(
      <MemoryRouter>
        <Header activeBar={1} />
      </MemoryRouter>
    );

    const links = screen.getAllByRole('link');

    expect(links.length).toBeGreaterThan(0);

    fireEvent.click(links[0]);
    expect(links[0]).toHaveClass('overflow-visible w-30');

    fireEvent.click(links[1]);
    expect(links[1]).toHaveClass('overflow-visible w-30');
    expect(links[0]).not.toHaveClass('overflow-visible w-30');
  });
});
