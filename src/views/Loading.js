import React from "react";
import styled from "styled-components";
import DataContext from "../DataContext";
import Main from "../components/layouts/Main";
import background from "../assets/img/michael-jordan-space-jam.jpg";

const Loading = () => {
  return (
    <DataContext.Consumer>
      {(props) => (
        <Main src={background} logo>
          <LoadingStyled>
            <p>{props.data.content}</p>
            <p>{props.data.loading}</p>
            <p>Loading</p>
          </LoadingStyled>
        </Main>
      )}
    </DataContext.Consumer>
  );
};

const LoadingStyled = styled.div`
  color: black;
`;

export default Loading;
