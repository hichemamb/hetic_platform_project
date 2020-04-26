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
const Image = ({ onClick, src, size, style }) => {
  return (
    <ImageStyled onClick={onClick} src={src} size={size} style={{ ...style }} />
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
  style: {},
};

Image.propTypes = {
  size: PropTypes.oneOf(["small", "large"]),
  style: PropTypes.string,
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Image;
