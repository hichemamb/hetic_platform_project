import React from "react";
import styled from "styled-components";
import DataContext from "../DataContext";
import Main from "../components/layouts/Main";
import background from "../assets/img/michael-jordan-space-jam.jpg";
import TitleHomeDefault from "../components/atoms/TitleHome/TitleHome";
import Button from "../components/atoms/Button/Button";
import "../assets/fonts/fonts.css";

const Loading = () => {
  return (
    <DataContext.Consumer>
      {(props) => (
        <Main src={background} logo>
          <LoadingStyled>
            <div className="loading-flexContainer">
              <TitleHomeDefault background="default" title="Micheal Jordan" />
              <span>Démarrez l'expérience Michael JORDAN</span>
              <Button size="small" type="primary" onClick={() => alert("hey")}>
                start{" "}
              </Button>
            </div>
          </LoadingStyled>
        </Main>
      )}
    </DataContext.Consumer>
  );
};

const LoadingStyled = styled.div`
  color: white;
  .loading-flexContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      margin-bottom: 12px;
      margin-top: 16px;
      font-size: 14px;
      font-family: Chakra Petch;
      font-weight: bold;
    }
  }
`;

export default Loading;
