import React from "react";
import MainLink from "./MainLink";

export const Default = (props) => (
  <MainLink testid="mainlink" onClick={props.onClick}>
    Default
  </MainLink>
);
