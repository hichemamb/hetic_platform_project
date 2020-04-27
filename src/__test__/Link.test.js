import React from "react";
import { render } from "@testing-library/react";
// this adds jest-dom's custom assertions
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

import { Active, NotActive } from "../components/atoms/Link/Link.stories";

describe("Renders Link component", () => {
  let spy;

  beforeEach(() => {
    spy = jest.fn();
  });

  test("with active link", () => {
    const { container, getByTestId } = render(<Active onClick={spy} />);
    expect(container).toBeTruthy();
    const link = getByTestId("link-active");
    expect(link).toHaveStyleRule("color", "#FFFFFF");
    link.click();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  test("with not active link", () => {
    const { container, getByTestId } = render(<NotActive onClick={spy} />);
    expect(container).toBeTruthy();
    const link = getByTestId("link-notactive");
    expect(link).toHaveStyleRule("color", "#595959");
    link.click();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
