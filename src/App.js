import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./components/layouts/Home";
import Loading from "./components/layouts/Loading";
import Navigation from "./components/layouts/Navigation";
import NavigationDetail from "./components/layouts/NavigationDetail";
import SecureRouter from "./components/layouts/SecureRouter";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/loading">
            <Loading />
          </Route>
          <Route path="/navigation/">
            <Navigation />
          </Route>
          <Route path="/navigation/:element/:id">
            <NavigationDetail />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
