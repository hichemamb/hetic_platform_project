import React from "react";
import ButtonLink from "./ButtonLink";

export const Left = () => (
  <ButtonLink position="left" onClick={onClickButton} />
);
export const Right = () => (
  <ButtonLink position="right" onClick={onClickButton} />
);

const onClickButton = (e) => {
  e.preventDefault();
  alert("Hello button");
};
