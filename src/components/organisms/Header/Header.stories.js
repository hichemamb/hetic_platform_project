import React from "react";
import Header from "./Header";
import Link from "../../atoms/Link/Link";
export const Default = () => (
  <Header onClickHome={onClickHome}>
    <Link isActive={true} onClick={onClickLink}>
      1994
    </Link>
    <Link isActive={false} onClick={onClickLink}>
      2000
    </Link>
    <Link isActive={false} onClick={onClickLink}>
      2002
    </Link>
  </Header>
);

const onClickLink = (e) => {
  e.preventDefault();
  alert("Hello Link");
};
const onClickHome = (e) => {
  e.preventDefault();
  alert("Hello Home");
};
