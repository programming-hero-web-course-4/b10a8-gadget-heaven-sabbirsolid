import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Offer from "../Offer/Offer";
import smartphone from "../../assets/smartphones.jpg";
import laptops from "../../assets/laptopoffer.webp";
import oneplus from "../../assets/oneplus.jpg";

const Offers = () => {
  // tab name
  useEffect(() => {
    document.title = "Offers | Gadgets Heaven";
  }, []);
  // loading offers
  const [offer, setOffer] = useState(false);
  const handleAllOffers = () => {
    setOffer(true);
  };
  const info = useLoaderData();
  const dataArray = Array.isArray(info) ? info : [];
  console.log(dataArray);
  return (
    <div>
      <div className="text-center bg-[#9538E2] py-20">
        <h1 className="text-5xl font-bold px-6 text-white">Offers</h1>
        <p className="text-white px-6">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        {/* Dashboard buttons */}
        <div className="space-x-5"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:flex">
        <img src={smartphone} alt="" />
        <img src={laptops} alt="" />
        <img src={oneplus} alt="" />
      </div>
      <div className="my-5 text-center">
        <button onClick={handleAllOffers} className="text-[#9538E2] font-bold border border-purple-600 hover:bg-slate-300 py-2 px-5 rounded-3xl my-2">
          View Our Products
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-11/12 mx-auto gap-5 bg-gray-100 border border-gray-200 rounded-xl">
        {offer === true &&
          dataArray.map((product) => (
            <Offer key={product.product_id} product={product}></Offer>
          ))}
      </div>
    </div>
  );
};

export default Offers;
