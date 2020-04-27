import React from "react";
import { render } from "@testing-library/react";
// this adds jest-dom's custom assertions
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

import {
  Default,
  Left,
} from "../components/atoms/TextContent/TextContent.stories";

describe("Renders TextContent component", () => {
  let spy;

  beforeEach(() => {
    spy = jest.fn();
  });

  test("with default props", () => {
    const { container, getByTestId } = render(<Default />);
    expect(container).toBeTruthy();
    const textcontent = getByTestId("textcontent-default");
    expect(textcontent).toHaveStyleRule("text-align", "right");
  });
  test("with a left position", () => {
    const { container, getByTestId } = render(<Left />);
    expect(container).toBeTruthy();
    const textcontent = getByTestId("textcontent-left");
    expect(textcontent).toHaveStyleRule("text-align", "left");
  });
});
