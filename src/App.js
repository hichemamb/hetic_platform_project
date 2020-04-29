import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./views/Home";
import Loading from "./views/Loading";
import Navigation from "./views/Navigation";
import NavigationDetail from "./views/NavigationDetail";
import SecureRouter from "./components/layouts/SecureRouter";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/loading">
            <Loading />
          </Route>
          <SecureRouter path="/navigation/:element/:id">
            <NavigationDetail />
          </SecureRouter>
          <SecureRouter path="/navigation">
            <Navigation />
          </SecureRouter>
          <Route path="*">
            <Redirect to="/loading" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
