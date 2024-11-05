import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center space-y-5 my-10">
      {/* company name  */}
      <div className="text-center">
        <h1 className="text-3xl font-bold">Gadgets Heaven</h1>
        <p>
          Leading cutting edge tech products distributor and services provider
        </p>
      </div>
      <div className="border-t-2 w-11/12 mx-auto"></div>
      {/* main footer */}
      <div className="flex text-center gap-10 lg:gap-52 mx-auto px-5 py-10">
        <div className="flex flex-col">
          <h2 className="font-bold text-xl text-gray-800">Services</h2>
          <div className="text-gray-600  flex flex-col">
            <a>Product Support</a>
            <a>Order Tracking</a>
            <a>Shipping & Delivery</a>
            <a>Returns</a>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-xl text-gray-800">Company</h2>
          <div className="text-gray-600  flex flex-col">
            <a>About Us</a>
            <a>Career</a>
            <a>Contact</a>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-xl text-gray-800">Legal</h2>
          <div className="text-gray-600  flex flex-col">
            <a>Terms of Services</a>
            <a>Privacy Policy</a>
            <a>Cookie Policy</a>
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
