import React from "react";
import styled from "styled-components";
import DataContext from "../../DataContext";

const Loading = () => {
  return (
    <DataContext.Consumer>
      {(props) => (
        <LoadingStyled>
          <p>{props.data.content}</p>
          <p>{props.data.loading}</p>
          <p>Loading</p>
        </LoadingStyled>
      )}
    </DataContext.Consumer>
  );
};

const LoadingStyled = styled.div`
  color: red;
`;

export default Loading;
