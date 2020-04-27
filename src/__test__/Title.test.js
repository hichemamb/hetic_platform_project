import React from "react";
import { render } from "@testing-library/react";
// this adds jest-dom's custom assertions
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

import {
  TitleDefault,
  TitleMedium,
  TitleSmall,
  TitleWithLine
} from "../components/atoms/Title/Title.stories";

describe("Renders Title component", () => {
  test("with title default", () => {
    const { container, getByTestId } = render(<TitleDefault />);
    expect(container).toBeTruthy();
    const title = getByTestId("title-default");
    expect(title).toHaveStyleRule("font-size", "60px");
  });
  test("with title medium", () => {
    const { container, getByTestId } = render(<TitleMedium />);
    expect(container).toBeTruthy();
    const title = getByTestId("title-medium");
    expect(title).toHaveStyleRule("font-size", "34px");
  });
  test("with title small", () => {
    const { container, getByTestId } = render(<TitleSmall />);
    expect(container).toBeTruthy();
    const title = getByTestId("title-small");
    expect(title).toHaveStyleRule("font-size", "14px");
  });
});
