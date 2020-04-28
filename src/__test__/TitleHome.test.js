import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

import {
    TitleHomeDefault,
} from "../components/atoms/TitleHome/TitleHome.stories";
import MJ23bg from "../assets/intro.svg";


describe("Renders TitleHome component", () => {
  test("with title default background", () => {
    const { container, getByTestId } = render(<TitleHomeDefault />);
    expect(container).toBeTruthy();
    const titleHome = getByTestId("titleHome-default");
    expect(titleHome).toHaveStyleRule(
        "background",
        `url(${MJ23bg}) no-repeat center`
    );
  });
  test("With the font-size of title default ", () => {
    const { container, getByTestId } = render(<TitleHomeDefault />);
    expect(container).toBeTruthy();
    const titleHome = getByTestId("titleHome-title");
    expect(titleHome).toHaveStyleRule("font-size", "200px");
  });
  test("With the font-size of discover default and his position ", () => {
    const { container, getByTestId } = render(<TitleHomeDefault />);
    expect(container).toBeTruthy();
    const titleHome = getByTestId("titleHome-discover");
    expect(titleHome).toHaveStyleRule("font-size", "14px");
    expect(titleHome).toHaveStyleRule("text-align", "right");
  });
});
