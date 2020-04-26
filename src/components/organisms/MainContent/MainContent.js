import React from "react";
import TextContent from "../../atoms/TextContent/TextContent";
import TitleGroup from "../../molecules/TitleGroup/TitleGroup";
import styled from "styled-components";
import PropTypes from "prop-types";
import ImagesGroup from "../../molecules/ImagesGroup/ImagesGroup";
const MainContent = ({ children, size, position, title, subText, sources }) => (
  <MainContentStyled>
    <div>
      <TitleGroup title={title} subText={subText} size={size} />
      <TextContent position={position}>{children}</TextContent>
    </div>
    <ImagesGroup sources={sources} />
  </MainContentStyled>
);

const MainContentStyled = styled.div`
  display: flex;
  min-width: 1272px;
  justify-content: space-between;
  align-items: center;
  div:first-of-type {
    width: 464px;
    flex-direction: column;
    align-items: flex-end;
    div:first-of-type {
      width: 100%;
    }
    div:nth-of-type(2) {
      width: 100%;
    }
    div:last-of-type {
      margin-top: 46px;
    }
  }
  div:last-of-type {
    max-width: 750px;
    div:first-of-type {
      width: auto;
    }
  }
`;

MainContent.displayName = "TextContent";
MainContent.defaultProps = {
  position: "right",
  size: "large",
};

MainContent.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  sources: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
  position: PropTypes.oneOf(["left,right"]),
  children: PropTypes.element.isRequired,
};

export default MainContent;
