import React from "react";

import Hero from "../Hero/Hero";
import NavigationBar from "../NavigationBar/NavigationBar";
import Products from "../Products/Products";

const App = () => {
  return (
    <>
      <NavigationBar />
      <Hero />
      <Products />
    </>
  );
};

export default App;
