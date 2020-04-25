import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "../../../assets/fonts/fonts.css";

const Link = ({ children, onClick, isActive }) => (
  <LinkStyled onClick={onClick} isActive={isActive}>
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

Link.propTypes = {
  isActive: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
