import React from "react";
import styled from "styled-components";
import DataContext from "../../DataContext";
import { Route, Redirect, useHistory } from "react-router-dom";

const Home = ({ path, children, ...el }) => {
  return (
    <DataContext.Consumer>
      {(props) => {
        const { loading } = props.data;
        return loading ? (
          <Redirect to="/loading" />
        ) : (
          <Route path={path} {...el}>
            {children}
          </Route>
        );
      }}
    </DataContext.Consumer>
  );
};

export default Home;
