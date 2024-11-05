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
    // useEffect(() => {
    //   document.title = 'Smartphone | Gadget Heaven';
    // },[])
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
  return (
    <div className="flex flex-col items-center space-y-5">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Explore Lovely Gadgets</h1>
      </div>
      <div className="lg:flex w-11/12 mx-auto space-y-5">
        <div className="lg:flex flex-col gap-3 ">
          <button
            onClick={handleAllProducts} className={`font-bold py-3 px-5 rounded-3xl ${activeButton === "all" ? "bg-[#9538E2] text-white" : "bg-gray-200"}`}>All Products</button>
          <button onClick={handleSmartphones} className={`font-bold py-3 px-5 rounded-3xl ${activeButton === "smartphones" ? "bg-[#9538E2] text-white" : "bg-gray-200"}`}
          >Smartphones</button>
          <button onClick={handleLaptops} className={`font-bold py-3 px-5 rounded-3xl ${activeButton === "laptops" ? "bg-[#9538E2] text-white" : "bg-gray-200"}`}> Laptops
          </button>
          <button onClick={handleSmartWatches} className={`font-bold py-3 px-5 rounded-3xl ${activeButton === "smartwatches" ? "bg-[#9538E2] text-white" : "bg-gray-200"}`}> Smartwatch
          </button>
          <button onClick={handleVR} className={`font-bold py-3 px-5 rounded-3xl ${activeButton === "vr" ? "bg-[#9538E2] text-white" : "bg-gray-200"}`}>VRs</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-5">
          {products.map((product) => (
            <Product key={product.product_id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
