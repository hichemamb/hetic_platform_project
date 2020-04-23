import React from "react";
import MainLink from "./MainLink";

export const Default = () => (
  <MainLink size="small" onClick={onClickButton}>
    Default
  </MainLink>
);

const onClickButton = (e) => {
  e.preventDefault();
  alert("Hello button");
};
