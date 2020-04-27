import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "../../../assets/fonts/fonts.css";
// quaternary, quinary, senary, septenary, octonary, nonary,

const MainLink = ({ size, children, type, onClick, testid }) => {
  const fourTimes = (element) => {
    let array = [];
    for (let i = 0; i < 4; i++) {
      array.push(element);
    }
    return array;
  };
  let newChildren = fourTimes(children, onClick);
  return (
    <StyledMainLink>
      <Link data-testid={testid} onClick={onClick}>
        {children}{" "}
      </Link>
      {newChildren
        .map((_, i) => (
          <LinkDecoration key={i} opacity={i / newChildren.length}>
            {children}
          </LinkDecoration>
        ))
        .reverse()}
    </StyledMainLink>
  );
};

const StyledMainLink = styled.span`
  height: 405px;
  width: 553px;
  font-family: Chakra Petch;
  position: relative;
  transition: all ease 0.4s;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 150px;
`;
const Link = styled.span`
  color: white;
  position: absolute;
  top: 0;
  font-family: Chakra Petch;
  z-index: 100;
  -webkit-text-stroke: 1px white;
  color: none;
  transition: 200ms all ease;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
`;
const LinkDecoration = styled.span`
  opacity: ${(props) => props.opacity};
  -webkit-text-stroke: 1px white;
  position: absolute;
  z-index: 4;
  font-family: Chakra Petch;
  color: rgba(0, 0, 0, 0);
  top: ${(props) => (props.opacity * 3000) / Math.exp(props.opacity * 5)}px;
`;
MainLink.displayName = "MainLink";

MainLink.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  testid: PropTypes.string,
};

export default MainLink;
