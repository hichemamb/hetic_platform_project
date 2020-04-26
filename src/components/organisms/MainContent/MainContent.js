import React from "react";
import TextContent from "../../atoms/TextContent/TextContent";
import TitleGroup from "../../molecules/TitleGroup/TitleGroup";
import styled from "styled-components";
import PropTypes from "prop-types";

const MainContent = ({ children, size, position, title, subText }) => (
  <MainContentStyled>
    <TitleGroup title={title} subText={subText} size={size} />
    <TextContent position={position}>{children}</TextContent>
  </MainContentStyled>
);

const MainContentStyled = styled.div`
  display: flex;
  width: 434px;
  margin: 24px;
  flex-direction: column;
  align-items: flex-end;
  div:first-of-type {
    width: 100%;
  }
  div:last-of-type {
    margin-top: 46px;
  }
`;

MainContent.displayName = "TextContent";
MainContent.defaultProps = {
  position: "right",
  size: "large",
};

MainContent.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  title: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
  position: PropTypes.oneOf(["left,right"]),
  children: PropTypes.element.isRequired,
};

export default MainContent;
