import { render } from "@testing-library/react";
import Header from "./Header.component";

describe("Header Component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
