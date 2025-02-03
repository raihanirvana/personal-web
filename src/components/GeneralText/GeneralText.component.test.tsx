import { render } from "@testing-library/react";

import GeneralText from "./GeneralText.component";

describe('General Text', () => {
  it('must matches snapshot', () => {
    const { asFragment } = render(<GeneralText text="saya ganteng" customStyle="text-3xl" />)

    expect(asFragment()).toMatchSnapshot()
  })
})