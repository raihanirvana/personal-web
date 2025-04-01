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
