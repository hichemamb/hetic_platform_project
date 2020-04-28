import React from "react";
import styled from "styled-components";
import DataContext from "../DataContext";
import Main from "../components/layouts/Main";
const Loading = () => {
  return (
    <DataContext.Consumer>
      {(props) => (
        <Main>
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
  color: red;
`;

export default Loading;
