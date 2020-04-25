import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import RightArrow from "../../../assets/img/fleche-navigation-droite.svg";
import LeftArrow from "../../../assets/img/fleche-navigation-gauche.svg";

// quaternary, quinary, senary, septenary, octonary, nonary,

const UIIcon = {
  right: RightArrow,
  left: LeftArrow,
};

const ButtonLink = ({ position, onClick }) => {
  return <ButtonLinkStyled position={position} onClick={onClick} />;
};

const ButtonLinkStyled = styled.div`
  background-image: url(${(props) => UIIcon[props.position]});
  font-size: 16px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  opacity: 0.5;
  transition: 200ms all ease;
  :hover {
    transform: scale(1.1);
  }
`;

ButtonLink.displayName = "ButtonLink";
ButtonLink.defaultProps = {
  position: "left",
};

ButtonLink.propTypes = {
  position: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonLink;
