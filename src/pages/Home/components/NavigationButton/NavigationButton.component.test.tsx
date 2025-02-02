import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import NavigationButton from './NavigationButton.component';

describe('NavigationButton', () => {
  it('must match snapshot', () => {
    const { asFragment } = render(<MemoryRouter><NavigationButton text='Halo' navigate='/resume' /></MemoryRouter>)

    expect(asFragment()).toMatchSnapshot()
  })

  it('must navigate when clicked', async () => {
    render(
    <MemoryRouter>
      <Routes>
      <Route path="/" element={<NavigationButton text='Resume' navigate='/resume' />} />
      <Route path="/resume" element={<div>Resume</div>} />
      </Routes>
    </MemoryRouter>)
    
    const linkButton = screen.getByRole('link', {name: 'Resume'})
    fireEvent.click(linkButton)

    expect(await screen.findByText('Resume')).toBeInTheDocument();
  })
});