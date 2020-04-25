import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "../../atoms/Link/Link";
import "../../../assets/fonts/fonts.css";

const Header = ({ onClickHome, children }) => {
  return (
    <HeaderParentStyled>
      <Link isActive={true} onClick={onClickHome}>
        MJ23
      </Link>
      <HeaderStyled>{children}</HeaderStyled>
    </HeaderParentStyled>
  );
};

const HeaderParentStyled = styled.div`
  width: 110px;
  height: 100vh;
  border-right: 1px solid white;
  :first-of-type {
    position: absolute;
    top: 0;
    text-align: center;
  }
`;

const HeaderStyled = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;
Header.propTypes = {
  children: PropTypes.element.isRequired,
  onClickHome: PropTypes.func.isRequired,
};

export default Header;
