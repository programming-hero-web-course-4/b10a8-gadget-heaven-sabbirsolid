import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  // accessing all states
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [activeButton, setActiveButton] = useState("all");
  // loading data
  useEffect(() => {
    fetch("./gadgets.json")
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
        setProducts(data);
      });
  }, []);
  // category buttons handler functions
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
  const handleSmartWatches = () => {
    const Vrs = allProducts.filter(
      (product) => product.category === "Smartwatch");
    setProducts(Vrs);
    setActiveButton("smartwatches");
  };
  const handleChargers = () => {
    const chargers = allProducts.filter(
      (product) => product.category === "Chargers");
    setProducts(chargers);
    setActiveButton("chargers");
  };
  const handlePowerBanks = () => {
    const powerBanks = allProducts.filter(
      (product) => product.category === "powerbanks");
    setProducts(powerBanks);
    setActiveButton("powerbanks");
  };
  return (
    <div className="flex flex-col items-center ">
      <div className="text-center mb-5">
        <h1 className="text-4xl font-bold">Explore Lovely Gadgets</h1>
      </div>
      <div className="lg:flex place-items-start w-11/12 gap-5 mx-auto space-y-5">
        {/* category buttons */}
        <div className="border lg:mt-4 w-11/12 lg:w-2/12 md:w-1/12 mx-auto border-gray-200 p-5 grid lg:grid-cols-1 grid-cols-2 md:grid-cols-1 gap-5 rounded-lg">
          <button
            onClick={handleAllProducts} className={`font-bold py-3 px-5 hover:bg-gray-300 rounded-3xl ${activeButton === "all" ? "bg-[#9538E2] text-white" : "bg-gray-200"}`}>All Products</button>
          <button onClick={handleSmartphones} className={`font-bold hover:bg-gray-300 py-3 px-5 rounded-3xl ${activeButton === "smartphones" ? "bg-[#9538E2] text-white" : "bg-gray-200"}`}
          >Smartphones</button>
          <button onClick={handleLaptops} className={`font-bold py-3 hover:bg-gray-300 px-5 rounded-3xl ${activeButton === "laptops" ? "bg-[#9538E2] text-white" : "bg-gray-200"}`}> Laptops
          </button>
          <button onClick={handleSmartWatches} className={`font-bold hover:bg-gray-300 py-3 px-5 rounded-3xl ${activeButton === "smartwatches" ? "bg-[#9538E2] text-white" : "bg-gray-200"}`}> Smartwatch
          </button>
          <button onClick={handleVR} className={`font-bold py-3 hover:bg-gray-300 px-5 rounded-3xl ${activeButton === "vr" ? "bg-[#9538E2] text-white" : "bg-gray-200"}`}>VARs</button>
          <button onClick={handleChargers} className={`font-bold hover:bg-gray-300 py-3 px-5 rounded-3xl ${activeButton === "chargers" ? "bg-[#9538E2] text-white" : "bg-gray-200"}`}>Chargers</button>
          <button onClick={handlePowerBanks} className={`font-bold hover:bg-gray-300 py-3 px-5 rounded-3xl ${activeButton === "powerbanks" ? "bg-[#9538E2] text-white" : "bg-gray-200"}`}>PowerBanks</button>
        </div>
        {/* individual card container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-5 bg-gray-100 border border-gray-200 rounded-xl">
          {products.length === 0 ? <div className="w-11/12 mx-auto col-span-3 py-10">
            <h1 className="font-bold text-center text-2xl ">Product Not Found</h1>
          </div> :products.map((product) => (
            <Product key={product.product_id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
