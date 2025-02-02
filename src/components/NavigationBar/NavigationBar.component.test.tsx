import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
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

  it('navigates to the correct route when a link is clicked', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Header activeBar={1} />} />
          <Route path="/about" element={<div>About Page</div>} />
        </Routes>
      </MemoryRouter>
    );

    const aboutLink = screen.getByRole('link', { name: /about/i });
    fireEvent.click(aboutLink);

    expect(await screen.findByText('About Page')).toBeInTheDocument();
  });

  it('navigates to the correct route when a link is clicked', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Header activeBar={1} />} />
          <Route path="/resume" element={<div>Resume</div>} />
        </Routes>
      </MemoryRouter>
    );

    const aboutLink = screen.getByRole('link', { name: /resume/i });
    fireEvent.click(aboutLink);

    expect(await screen.findByText('Resume')).toBeInTheDocument();
  });
});
