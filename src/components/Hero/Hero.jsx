import React from "react";
import bannerImg from "../../assets/banner.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div>
      <div className="text-center mb-3 bg-[#9538E2] py-40 lg:py-56">
        <h1 className="text-5xl font-bold py-5 px-6 text-white">
          Update Your Accessories with Gadget Heaven
        </h1>
        <p className="py-4 text-white">
          Explore latest gadgets in our shop. Collections of coolest tech
          products
        </p>
        <Link to={"/dashboard"}>
          <button className=" text-[#9538E2] font-bold py-3 px-5 rounded-3xl bg-white my-2">Shop Now</button>
        </Link>
      </div>

      {/* banner image section */}
      <div className="lg:w-8/12 w-11/12 mx-auto border p-4 rounded-2xl relative bottom-40 lg:bottom-48 bg-white bg-opacity-20">
              <div className=" h-[600px] bg-white bg-opacity-100 rounded-2xl">
                  <img className="rounded-2xl w-full h-full object-cover" src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
