import React from "react";
import styled from "styled-components";
import DataContext from "../DataContext";
import '../assets/styles/reset.css';

const Navigation = () => {
  return (
    <DataContext.Consumer>
      {(props) => (
        <NavigationStyled>
          <p>{props.data.content}</p>
          <p>{props.data.loading}</p>
          <p>Navigation</p>
        </NavigationStyled>
      )}
    </DataContext.Consumer>
  );
};

const NavigationStyled = styled.div`
  color: red;
  background-color: #595959;
  width: 100%;
  height: 
`;

export default Navigation;
