import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// quaternary, quinary, senary, septenary, octonary, nonary,
const UIColors = {
  primary: {
    color: "#2F2F2F",
  },
  secondary: {
    color: "#F44949",
  },
  tertiary: {
    color: "transparent",
  },
};
const UISizes = {
  small: {
    width: "133px",
  },
  medium: {
    width: "100px",
  },
  large: {
    width: "200px",
  },
};

const MainLink = ({ size, children, type, onClick }) => {
  return (
    <StyledMainLink size={size} type={type} onClick={onClick}>
      {children}
    </StyledMainLink>
  );
};

const StyledMainLink = styled.button`
  font-size: 16px;
  width: ${(props) => UISizes[props.size].width};
  outline: none;
  transition: all ease 0.4s;
  border: 1px solid #ffffff;
  padding-top: 13px;
  padding-bottom: 13px;
  border-radius: 2px;
  border-color: none;
  color: #ffffff;
  background-color: ${(props) => UIColors[props.type].color};
  cursor: pointer;
  text-transform: uppercase;
  :hover {
    background-color: white;
    color: #2f2f2f;
  }
`;

MainLink.displayName = "MainLink";
MainLink.defaultProps = {
  size: "small",
  type: "primary",
};

MainLink.propTypes = {
  type: PropTypes.oneOf(["primary, secondary, tertiary"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MainLink;
