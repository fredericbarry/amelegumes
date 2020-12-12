import React from "react";

import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Products/Products";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
    </>
  );
};

export default App;
