import React from "react";
import styled from "styled-components";
import DataContext from "../../DataContext";

const Navigation = () => {
  return (
    <DataContext.Consumer>
      {(props) => (
        <NavigationStyled>
          <p>{props.data.content}</p>
          <p>{props.data.loading}</p>
        </NavigationStyled>
      )}
    </DataContext.Consumer>
  );
};

const NavigationStyled = styled.div`
  color: red;
`;

export default Navigation;
