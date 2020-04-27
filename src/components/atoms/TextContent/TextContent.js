import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "../../../assets/fonts/fonts.css";

const UIPosition = {
  left: "left",
  right: "right",
};

const TextContent = ({ position, children, testid }) => {
  return (
    <TextContentStyled position={position} data-testid={testid}>
      {children}
    </TextContentStyled>
  );
};

const TextContentStyled = styled.div`
  word-break: break-word;
  font-size: 16px;
  margin: 0;
  padding: 0 16px;
  text-align: ${(props) => UIPosition[props.position]};
  font-family: Open Sans;
  font-weight: 300;
  font-size: 15px;
  color: white;
  line-height: 20px;
  font-size: normal;
  height: 396px;
  width: 434px;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: white rgba(255, 255, 255, 0.3);
  ::-webkit-scrollbar {
    width: 3px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 20px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 20px;
  }
`;

TextContent.displayName = "TextContent";
TextContent.defaultProps = {
  position: "right",
};

TextContent.propTypes = {
  position: PropTypes.oneOf(["left", "right"]),
  children: PropTypes.node.isRequired,
  testid: PropTypes.string.isRequired,
};

export default TextContent;
