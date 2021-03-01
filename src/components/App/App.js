import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import React from "react";

import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Product from "../Product/Product";
import Products from "../Products/Products";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/">
            <Hero />
          </Route>
          <Route exact path="/boutique">
            <Products />
          </Route>
          <Route path={"/boutique/semis-tomates/:slug"}>
            <Product />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
