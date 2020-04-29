import React from "react";
import styled from "styled-components";
import DataContext from "../DataContext";
import Main from '../components/layouts/Main';
import {Default} from '../components/atoms/MainLink/MainLink.stories';
import {Left, Right} from '../components/atoms/ButtonLink/ButtonLink.stories';
import Cinemabg from '../assets/img/michael-jordan-space-jam.jpg';
import '../assets/styles/reset.css';

const Navigation = () => {
  return (
    // <DataContext.Consumer>
    //   {(props) => (
    //     <NavigationStyled>
    //       <p>{props.data.content}</p>
    //       <p>{props.data.loading}</p>
    //     </NavigationStyled>
    //   )}
    // </DataContext.Consumer>
    <Main src={ Cinemabg }>
      <div style={{ marginRight: '120px' }}>
        <Left />
      </div>
      <Default> Marvel </Default>
      <div style={{ marginLeft: '120px' }}>
        <Right />
      </div>
    </Main>
  );
};

const NavigationStyled = styled.div`
  background-color: #595959;
  width: 100%;
  height: 100vh;
`;

export default Navigation;
