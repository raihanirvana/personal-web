import { render } from '@testing-library/react';

import TechStack from './TechStack.component';

describe('TechStack', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<TechStack />);

    expect(asFragment()).toMatchSnapshot();
  });
});
