import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "../atoms/Link/Link";

const Main = ({ src, logo, children }) => (
  <MainStyled src={src} logo={logo}>
    <Link>MJ23</Link>
    {children}
  </MainStyled>
);

const MainStyled = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))
    url(${(props) => props.src});
  div:first-of-type {
    position: absolute;
    margin: 30px 10px;
    display: ${(props) => (props.logo ? "block" : "none")};
  }
`;

Main.displayName = "Main";
Main.defaultProps = {
  logo: false,
};
Main.propTypes = {
  src: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  logo: PropTypes.bool,
};

export default Main;
