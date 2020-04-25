import React from "react";
import Image from "./Image";
import src from "../../../assets/img/michael-jordan-space-jam.jpg";

const onClickImage = (e) => {
  e.preventDefault();
  alert("Hello button");
};

export const Large = () => <Image size="large" src={src} />;
export const Small = () => <Image size="small" src={src} />;
export const WithAction = () => (
  <Image size="small" onClick={onClickImage} src={src} />
);
