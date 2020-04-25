import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Image from "../../atoms/Image/Image";

const ImagesGroup = ({ sources }) => {
  const [mainSource, setMainSource] = useState(sources[0]);
  const withoutImageSelected = sources.filter(
    (source) => source !== mainSource
  );

  const changeSource = (s) => setMainSource(s);

  return (
    <ImagesGroupParentStyled>
      <Image size="large" src={mainSource} />
      <ImagesGroupStyled>
        {withoutImageSelected.map((source) => (
          <Image
            size="small"
            src={source}
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
};

export default ImagesGroup;
