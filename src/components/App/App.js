import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import React from "react";

import Hero from "../Hero/Hero";
import NavigationBar from "../NavigationBar/NavigationBar";
import Product from "../Product/Product";
import Products from "../Products/Products";

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <main>
        <Switch>
          <Route exact path="/">
            <Hero />
          </Route>
          <Route path="/produits">
            <Products />
          </Route>
          <Route path="/produit/:slug">
            <Product />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
