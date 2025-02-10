import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import About from './About.page';

describe('TechStack', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <HelmetProvider>
        <MemoryRouter>
          <About />
        </MemoryRouter>
      </HelmetProvider>
  );
  
    expect(asFragment()).toMatchSnapshot();
  });
});
