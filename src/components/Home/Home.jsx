import React, { useEffect } from "react";
import Hero from "../Hero/Hero";
import Products from "../Products/Products";

const Home = () => {
    useEffect(() => {
        document.title = 'Home | Gadget Heaven';
    },[])
  return (
    <div>
      <Hero></Hero>
      <Products></Products>
    </div>
  );
};

export default Home;