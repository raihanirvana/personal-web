import { render } from '@testing-library/react';

import ExperienceCard from './ExperienceCard.component';

describe('ExperienceCard', () => {
  it('must matches snapshot', () => {
    const { asFragment } = render(
      <ExperienceCard title='a' date='1/1' role='a' description='aaa' isActive />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
