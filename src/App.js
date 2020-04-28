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
