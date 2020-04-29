import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "../../assets/fonts/fonts.css";
import ButtonLink from "../atoms/ButtonLink/ButtonLink";

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  opacity: 0.5;
  transition: 200ms all ease;
  :hover {
    opacity: 1;
  }
`;

const ButtonTitle = styled.span`
  color: #fff;
  font-size: 16px;
  font-family: "Chakra Petch", sans-serif;
  margin-left: 10px;
`;

const ButtonLinkBack = ({ title, width, height, onClick }) => {
  return (
    <ButtonContainer onClick={onClick}>
      <ButtonLink width={width} height={height} />
      <ButtonTitle>{title}</ButtonTitle>
    </ButtonContainer>
  );
};

ButtonLinkBack.displayName = "ButtonLinkBack";
ButtonLinkBack.defaultProps = {
  title: "Default",
  width: "default",
  height: "default",
  onClick: () => alert("ButtonLinkBack"),
};

ButtonLinkBack.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  width: PropTypes.oneOf(["default", "medium", "large"]),
  height: PropTypes.oneOf(["default", "medium", "large"]),
};

export default ButtonLinkBack;
