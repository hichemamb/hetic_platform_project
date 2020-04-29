import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "../../atoms/Link/Link";
import "../../../assets/fonts/fonts.css";

const Header = ({ onClickHome, children }) => {
  return (
    <HeaderParentStyled>
      <div className="header-logo">
        <Link isActive={true} onClick={onClickHome}>
          MJ23
        </Link>
      </div>
      <HeaderStyled>{children}</HeaderStyled>
    </HeaderParentStyled>
  );
};

const HeaderParentStyled = styled.div`
  width: 110px;
  height: 100vh;
  border-right: 1px solid white;
  .header-logo {
    position: absolute;
    top: 0;
    left: 24px;
    text-align: center;
  }
`;

const HeaderStyled = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;
Header.defaultProps = {
  onClickHome: () => alert("Home"),
};
Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  onClickHome: PropTypes.func,
};

export default Header;
