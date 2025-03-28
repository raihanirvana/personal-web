import { render } from '@testing-library/react';
import TypewriterEffect from './TypewriterEffect.component.tsx'

describe('ContactsList Component', () => {
  it('matches the snapshot', () => {
    const { asFragment } = render(<TypewriterEffect text='Raihan' customStyle={'text-white'} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
