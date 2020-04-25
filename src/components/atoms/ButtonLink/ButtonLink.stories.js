import React from "react";
import ButtonLink from "./ButtonLink";

export const Left = () => (
  <ButtonLink position="left" width="medium" height="medium" onClick={onClickButton} />
);
export const Right = () => (
  <ButtonLink position="right" width="medium" height="medium" onClick={onClickButton} />
);

const onClickButton = (e) => {
  e.preventDefault();
  alert("Hello button");
};
