import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import RightArrow from "../../../assets/fleche-navigation-droite.svg";
import LeftArrow from "../../../assets/fleche-navigation-gauche.svg";

// quaternary, quinary, senary, septenary, octonary, nonary,

const UIIcon = {
  right: RightArrow,
  left: LeftArrow,
};

const UISize = {
  default: {
    width: "30px",
    height: "30px",
  },
  medium: {
    width: "50px",
    height: "50px",
  },
  large: {
    width: "70px",
    height: "70px",
  },
};

const ButtonLink = ({ position, onClick, width, height, testid }) => {
  return (
    <ButtonLinkStyled
      position={position}
      width={width}
      height={height}
      onClick={onClick}
      data-testid={testid}
    />
  );
};

const ButtonLinkStyled = styled.div`
  background: url(${(props) => UIIcon[props.position]}) no-repeat center;
  background-size: cover;
  font-size: 16px;
  width: ${(props) => UISize[props.width].width};
  height: ${(props) => UISize[props.height].height};
  cursor: pointer;
  opacity: 0.5;
  transition: 200ms all ease;
  :hover {
    transform: scale(1.1);
    opacity: 1;
  }
`;

ButtonLink.displayName = "ButtonLink";
ButtonLink.defaultProps = {
  position: "left",
  width: "default",
  height: "default",
};

ButtonLink.propTypes = {
  position: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  testid: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default ButtonLink;
