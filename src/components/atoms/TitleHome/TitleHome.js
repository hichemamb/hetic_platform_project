import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import background from "../../../assets/intro.svg";
import "../../../assets/fonts/font.css";

const UIBackground = {
  default: background,
};

const TitleHome = ({
  background,
  title,
  testid,
  testidTitle,
  testidDiscover,
}) => {
  return (
    <div>
      <TitleHomeContainer background={background} data-testid={testid}>
        <div
          style={{
            width: "80%",
            margin: "0 auto",
          }}
        >
          <TitleHomeStyled data-testid={testidTitle}>{title}</TitleHomeStyled>
          <TitleHomeDiscover data-testid={testidDiscover}>
            United Center Chicago Bulls <br /> West Madison Street, Chicago{" "}
            <br /> États-Unis{" "}
          </TitleHomeDiscover>
        </div>
      </TitleHomeContainer>
    </div>
  );
};

const TitleHomeContainer = styled.div`
  background: url(${(props) => UIBackground[props.background]}) no-repeat center;
  background-size: inherit;
  text-align: center;
  overflow: auto;
`;

const TitleHomeStyled = styled.h1`
  font-size: 200px;
  font-family: "Chakra Petch", sans serif;
  line-height: 153px;
  text-transform: uppercase;
  color: #ffffff;
  text-shadow: 0 0 10px black;
`;

const TitleHomeDiscover = styled.p`
  font-size: 14px;
  font-family: "Chakra Petch", sans serif;
  font-weight: 700;
  line-height: 20px;
  text-transform: capitalize;
  color: #ffffff;
  text-align: right;
`;

TitleHome.displayName = "TitleHome";
TitleHome.defaultProps = {
  background: "default",
  title: "undefined",
};

TitleHome.propTypes = {
  background: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TitleHome;
