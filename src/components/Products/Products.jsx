import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [activeButton, setActiveButton] = useState("all");
  useEffect(() => {
    fetch("./gadgets.json")
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
        setProducts(data);
      });
  }, []);
  const handleAllProducts = () => {
    setProducts(allProducts);
    setActiveButton("all");
  };
  const handleSmartphones = () => {
    const smartphones = allProducts.filter(
      (product) => product.category === "Smartphone");
    setProducts(smartphones);
    setActiveButton("smartphones");
  };
  const handleLaptops = () => {
    const laptops = allProducts.filter(
      (product) => product.category === "Laptop");
    setProducts(laptops);
    setActiveButton("laptops");
  };
  const handleVR = () => {
    const Vrs = allProducts.filter(
      (product) => product.category === "VR Headset");
    setProducts(Vrs);
    setActiveButton("vr");
  };
  return (
    <div className="flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Explore Lovely Gadgets</h1>
      </div>
      <div className="flex w-11/12 mx-auto gap-9">

        <div className="flex flex-col gap-3">
          <button
            onClick={handleAllProducts} className={`btn ${activeButton === "all" ? "bg-red-700" : ""}`}>All Products</button>
          <button onClick={handleSmartphones} className={`btn ${activeButton === "smartphones" ? "bg-red-700" : ""}`}
          >Smartphones</button>
          <button onClick={handleLaptops} className={`btn ${activeButton === "laptops" ? "bg-red-700" : ""}`}> Laptops
          </button>
          <button onClick={handleVR} className={`btn ${activeButton === "vr" ? "bg-red-700" : ""}`}>VRs</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto">
          {products.map((product) => (
            <Product key={product.product_id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
