import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import DataContext from "../DataContext";
import Main from "../components/layouts/Main";
import background from "../assets/img/michael-jordan-space-jam.jpg";
import TitleHomeDefault from "../components/atoms/TitleHome/TitleHome";
import Button from "../components/atoms/Button/Button";
import "../assets/fonts/fonts.css";
import { getData } from "../services/api";
import { useHistory } from "react-router-dom";
const Loading = () => {
  const { setData } = useContext(DataContext);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    getData(setProgress).then((el) => {
      setData({ contents: el.data, loading: false });
    });
  }, []);

  return (
    <DataContext.Consumer>
      {(props) => {
        return (
          <Main src={background} logo>
            <LoadingBlock progress={progress} />
            <LoadingStyled>
              <div className="loading-flexContainer">
                <TitleHomeDefault background="default" title="Micheal Jordan" />

                {!props.data.loading ? (
                  <StartBlock />
                ) : (
                  <WaitingBlock>{progress}%</WaitingBlock>
                )}
              </div>
            </LoadingStyled>
          </Main>
        );
      }}
    </DataContext.Consumer>
  );
};

const StartBlock = () => {
  let history = useHistory();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "320",
      }}
    >
      <span>Démarrez l'expérience Michael JORDAN</span>
      <Button
        size="small"
        type="primary"
        onClick={() => history.push("/navigation")}
      >
        start{" "}
      </Button>
    </div>
  );
};
const WaitingBlock = styled.div`
  color: white;
  font-family: Chakra Petch;
  font-size: 48px;
  margin: 16px 0;
  height: 320px;
  overflow: hidden;
`;
const LoadingStyled = styled.div`
  color: white;
  .loading-flexContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      margin-bottom: 12px;
      margin-top: 16px;

      font-family: Chakra Petch;
      font-weight: bold;
    }
  }
`;

const LoadingBlock = styled.div`
  position: fixed;
  top: 0;
  left: ${(props) => props.progress}%;
  right: 0;
  bottom: 0;
  background: #b60707;
  opacity: 0.7;
  z-index: 99999999;
  transition: all 1s ease-in;
`;
export default Loading;
