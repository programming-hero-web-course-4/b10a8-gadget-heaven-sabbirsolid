import React, { createContext, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
// declaring context
export const CartHandle = createContext(null);
export const WishListHandle = createContext(null);
const Root = () => {
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([]);
  return (
    <div>
      <WishListHandle.Provider value={[wishList, setWishList]}>
        <CartHandle.Provider value={[cart, setCart]}>
          <Navbar />
          <Outlet />
          <Footer />
        </CartHandle.Provider>
      </WishListHandle.Provider>
    </div>
  );
};

export default Root;
