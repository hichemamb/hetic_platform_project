import React from "react";
import { render } from "@testing-library/react";
// this adds jest-dom's custom assertions
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

import {
  Small,
  Large,
  WithAction,
  CustomAddBorder,
} from "../components/atoms/Image/Image.stories";
import image from "../assets/img/MFD_1.jpg";

describe("Renders Image component", () => {
  let spy;
  let src;
  beforeEach(() => {
    spy = jest.fn();
    src = image;
  });

  test("with small size", () => {
    const { container, getByTestId } = render(<Small src={src} />);
    expect(container).toBeTruthy();
    const image = getByTestId("image-small");

    expect(image).toHaveStyleRule("width", "100px !important");
    expect(image).toHaveStyleRule("height", "100px !important");
    expect(image).toHaveStyleRule("background-image", `url(${src})`);
  });

  test("with a large size", () => {
    const { container, getByTestId } = render(<Large src={src} />);
    expect(container).toBeTruthy();
    const image = getByTestId("image-large");
    expect(image).toHaveStyleRule("width", "100%");
    expect(image).toHaveStyleRule("height", "550px");
    expect(image).toHaveStyleRule("background-image", `url(${src})`);
  });

  test("with a click event", () => {
    const { container, getByTestId } = render(
      <WithAction src={src} onClick={spy} />
    );
    expect(container).toBeTruthy();
    const image = getByTestId("image-withaction");
    expect(image).toHaveStyleRule("width", "100px !important");
    expect(image).toHaveStyleRule("height", "100px !important");
    expect(image).toHaveStyleRule("background-image", `url(${src})`);
    image.click();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
