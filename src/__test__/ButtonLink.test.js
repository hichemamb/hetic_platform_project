import React from "react";
import { render } from "@testing-library/react";
// this adds jest-dom's custom assertions
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";
import {
  Left,
  SmallLeft,
  Right,
  SmallRight,
} from "../components/atoms/ButtonLink/ButtonLink.stories";
import lefticon from "../assets/fleche-navigation-gauche.svg";
import righticon from "../assets/fleche-navigation-droite.svg";

describe("Renders ButtonLink component", () => {
  let spy;

  beforeEach(() => {
    spy = jest.fn();
  });

  test("with left icon with medium size", () => {
    const { container, getByTestId } = render(<Left onClick={spy} />);
    expect(container).toBeTruthy();
    const buttonlink = getByTestId("buttonlink-left");
    expect(buttonlink).toHaveStyleRule("width", "50px");
    expect(buttonlink).toHaveStyleRule("height", "50px");
    expect(buttonlink).toHaveStyleRule(
      "background",
      `url(${lefticon}) no-repeat center`
    );
    buttonlink.click();
    expect(spy).toHaveBeenCalledTimes(1);
  });
  test("with left icon with default size", () => {
    const { container, getByTestId } = render(<SmallLeft onClick={spy} />);
    expect(container).toBeTruthy();
    const buttonlink = getByTestId("buttonlink-defaultleft");
    expect(buttonlink).toHaveStyleRule("width", "30px");
    expect(buttonlink).toHaveStyleRule("height", "30px");
    expect(buttonlink).toHaveStyleRule(
      "background",
      `url(${lefticon}) no-repeat center`
    );
    buttonlink.click();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  test("with right icon medium size", () => {
    const { container, getByTestId } = render(<Right onClick={spy} />);
    expect(container).toBeTruthy();
    const buttonlink = getByTestId("buttonlink-right");
    expect(buttonlink).toHaveStyleRule("width", "50px");
    expect(buttonlink).toHaveStyleRule("height", "50px");
    expect(buttonlink).toHaveStyleRule(
      "background",
      `url(${righticon}) no-repeat center`
    );
    buttonlink.click();
    expect(spy).toHaveBeenCalledTimes(1);
  });
  test("with right icon default size", () => {
    const { container, getByTestId } = render(<SmallRight onClick={spy} />);
    expect(container).toBeTruthy();
    const buttonlink = getByTestId("buttonlink-defaultright");
    expect(buttonlink).toHaveStyleRule("width", "30px");
    expect(buttonlink).toHaveStyleRule("height", "30px");
    expect(buttonlink).toHaveStyleRule(
      "background",
      `url(${righticon}) no-repeat center`
    );
    buttonlink.click();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
