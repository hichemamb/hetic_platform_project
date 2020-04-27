import React from "react";
import { render } from "@testing-library/react";
// this adds jest-dom's custom assertions
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

import { Default } from "../components/atoms/MainLink/MainLink.stories";

describe("Renders MainLink component", () => {
  let spy;

  beforeEach(() => {
    spy = jest.fn();
  });

  test("with default component", () => {
    const { container, getByTestId } = render(<Default onClick={spy} />);
    expect(container).toBeTruthy();
    const mainlink = getByTestId("mainlink");
    mainlink.click();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
