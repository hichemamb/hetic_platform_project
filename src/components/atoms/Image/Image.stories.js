import React from "react";
import Image from "./Image";

export const Large = (props) => (
  <Image size="large" src={props.src} testid="image-large" />
);
export const Small = (props) => (
  <Image size="small" src={props.src} testid="image-small" />
);

export const WithAction = (props) => (
  <Image
    size="small"
    onClick={props.onClick}
    src={props.src}
    testid="image-withaction"
  />
);
