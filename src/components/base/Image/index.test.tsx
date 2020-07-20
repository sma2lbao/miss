import Image from "./index";
import { render } from "enzyme";
import * as React from "react";

it("renders image", () => {
  const component = render(<Image />);
  expect(component).toMatchSnapshot();
});
