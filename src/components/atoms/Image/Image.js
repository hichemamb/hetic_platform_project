import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const UISizes = {
  small: {
    width: "100px !important",
    height: "100px !important",
  },
  large: {
    width: "100%",
    height: "550px",
  },
};
const Image = ({ onClick, src, size, testid }) => {
  return (
    <ImageStyled onClick={onClick} src={src} size={size} data-testid={testid} />
  );
};

const ImageStyled = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  width: ${(props) => UISizes[props.size].width};
  height: ${(props) => UISizes[props.size].height};
`;

Image.displayName = "Image";
Image.defaultProps = {
  size: "small",
};

Image.propTypes = {
  size: PropTypes.oneOf(["small", "large"]),
  testid: PropTypes.string,
  src: PropTypes.string,
  onClick: PropTypes.func,
};

export default Image;
