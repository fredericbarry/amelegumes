import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import React from "react";

import Hero from "../Hero/Hero";
import NavigationBar from "../NavigationBar/NavigationBar";
import Products from "../Products/Products";

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <main>
        <Switch>
          <Route exact path="/">
            <Hero />
            <Products />
          </Route>
          <Route path="/produits">
            <Products />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
