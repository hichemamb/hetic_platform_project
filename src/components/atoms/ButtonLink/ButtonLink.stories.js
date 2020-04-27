import React from "react";
import ButtonLink from "./ButtonLink";

export const Left = (props) => (
  <ButtonLink
    position="left"
    width="medium"
    height="medium"
    onClick={props.onClick}
    testid="buttonlink-left"
  />
);
export const Right = (props) => (
  <ButtonLink
    position="right"
    width="medium"
    height="medium"
    onClick={props.onClick}
    testid="buttonlink-right"
  />
);

export const SmallRight = (props) => (
  <ButtonLink
    position="right"
    width="default"
    height="default"
    onClick={props.onClick}
    testid="buttonlink-defaultright"
  />
);
export const SmallLeft = (props) => (
  <ButtonLink
    position="left"
    width="default"
    height="default"
    onClick={props.onClick}
    testid="buttonlink-defaultleft"
  />
);
