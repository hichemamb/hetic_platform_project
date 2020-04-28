import React from "react";
import styled from "styled-components";
import DataContext from "../DataContext";

const Home = () => {
  return (
    <DataContext.Consumer>
      {(props) => (
        <HomeStyled>
          <p>{props.data.content}</p>
          <p>{props.data.loading}</p>
          <p>Home</p>
        </HomeStyled>
      )}
    </DataContext.Consumer>
  );
};

const HomeStyled = styled.div`
  color: red;
`;

export default Home;
