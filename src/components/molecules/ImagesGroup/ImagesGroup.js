import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Image from "../../atoms/Image/Image";

const ImagesGroup = ({ sources, testid }) => {
  const [mainSource, setMainSource] = useState(null);
  const [index, setIndex] = useState(0);

  const withoutImageSelected = sources.filter((source, i) => i !== index);

  const changeSource = (s) => setIndex(s);

  return (
    <ImagesGroupParentStyled data-testid={testid}>
      <Image size="large" src={sources[index]} testid="image" />
      <ImagesGroupStyled>
        {withoutImageSelected.map((source) => (
          <Image
            key={`${source}`}
            size="small"
            src={source}
            testid="image"
            onClick={() => changeSource(source)}
          />
        ))}
      </ImagesGroupStyled>
    </ImagesGroupParentStyled>
  );
};
const ImagesGroupParentStyled = styled.div`
  width: 800px;
`;
const ImagesGroupStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  bottom: 50px;
  div:not(:first-child) {
    margin: 0 20px;
  }
`;

ImagesGroup.displayName = "ImagesGroup";

ImagesGroup.propTypes = {
  sources: PropTypes.array.isRequired,
  testid: PropTypes.string,
};

export default ImagesGroup;
