import { render } from '@testing-library/react';
import NavigationButton from './NavigationButton.component';

describe('NavigationButton', () => {
  it('must match snapshot', () => {
    const { asFragment } = render(<NavigationButton text='Halo' />)

    expect(asFragment()).toMatchSnapshot()
  })
});