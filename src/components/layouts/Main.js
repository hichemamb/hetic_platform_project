import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "../atoms/Link/Link";
import { useHistory } from "react-router-dom";

const Main = ({ src, logo, children, backgroundColor }) => {
  let history = useHistory();
  return (
    <MainStyled src={src} logo={logo} backgroundColor={backgroundColor}>
      <Link isActive onClick={() => history.push("/home")}>
        MJ23
      </Link>
      <div>{children}</div>
    </MainStyled>
  );
};

const MainStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
      ${(props) => props.backgroundColor},
      ${(props) => props.backgroundColor}
    ),
    url(${(props) => props.src});
  background-size: cover;
  button:first-of-type {
    position: absolute;
    z-index: 999px;
    top: 30px;
    left: 24px;
    display: ${(props) => (props.logo ? "block" : "none")};
  }
`;

Main.displayName = "Main";
Main.defaultProps = {
  logo: false,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
};
Main.propTypes = {
  children: PropTypes.node.isRequired,
  logo: PropTypes.bool.isRequired,
  backgroundColor: PropTypes.string,
  src: PropTypes.string,
};

export default Main;
