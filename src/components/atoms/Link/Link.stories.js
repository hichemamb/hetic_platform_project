import React from "react";
import Link from "./Link";

export const Active = () => (
  <Link isActive={true} onClick={onClickLink}>
    Active
  </Link>
);
export const NotActive = () => (
  <Link isActive={false} onClick={onClickLink}>
    Not Active
  </Link>
);

const onClickLink = (e) => {
  e.preventDefault();
  alert("Hello Link");
};
