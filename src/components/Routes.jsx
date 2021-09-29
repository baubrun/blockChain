import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, Exchanges, CurrencyDetail } from "../containers";
import News from "../components/News";
import Currencies from "./Currencies";

const Routes = () => {
  return (
    <div className="routes">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/currencies">
          <Currencies />
        </Route>
        <Route exact path="/currencies/:coinId">
          <CurrencyDetail />
        </Route>
        <Route exact path="/exchanges">
          <Exchanges />
        </Route>
        <Route exact path="/news">
          <News />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
