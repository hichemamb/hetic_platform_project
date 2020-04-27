import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "../../../assets/fonts/fonts.css";

const Link = ({ children, onClick, isActive, style, testid }) => (
  <LinkStyled
    onClick={onClick}
    isActive={isActive}
    style={{ ...style }}
    data-testid={testid}
  >
    {children}
  </LinkStyled>
);

const LinkStyled = styled.button`
  background: none;
  border: none;
  outline: none;
  font-family: Chakra Petch;
  font-weight: bold;
  font-size: 16px;
  line-height: 50px;
  cursor: pointer;
  color: ${(props) => (props.isActive ? "#FFFFFF" : "#595959")};
`;

Link.displayName = "Link";

Link.defaultProps = {
  style: {},
};

Link.propTypes = {
  isActive: PropTypes.bool.isRequired,
  testid: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
