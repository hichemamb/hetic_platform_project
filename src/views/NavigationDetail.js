import React from "react";
import styled from "styled-components";
import DataContext from "../DataContext";

const NavigationDetail = () => {
  return (
    <DataContext.Consumer>
      {(props) => (
        <NavigationDetailStyled>
          <p>{props.data.content}</p>
          <p>{props.data.loading}</p>
          <p>NavigationDetail</p>
        </NavigationDetailStyled>
      )}
    </DataContext.Consumer>
  );
};

const NavigationDetailStyled = styled.div`
  color: red;
`;

export default NavigationDetail;
