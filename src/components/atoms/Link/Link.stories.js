import React from "react";
import Link from "./Link";

export const Active = (props) => (
  <Link isActive={true} onClick={props.onClick} testid="link-active">
    Active
  </Link>
);
export const NotActive = (props) => (
  <Link isActive={false} onClick={props.onClick} testid="link-notactive">
    Not Active
  </Link>
);
