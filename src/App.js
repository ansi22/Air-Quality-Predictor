import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Compare from "./components/Compare/Compare";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/compare" component={Compare} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
