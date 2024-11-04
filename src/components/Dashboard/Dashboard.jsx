
import React, { useContext, useEffect, useState } from "react";
import { CartHandle, WishListHandle } from "../Root/Root";
import "./Dashboard.css";

const Dashboard = () => {
  const [cart, setCart] = useContext(CartHandle);
  const [wishList, setWishList] = useContext(WishListHandle);
useEffect(() => {
    document.title = 'Dashboard | Gadget Heaven';
},[])
  //Total amount calculation in modal
  let totalAmount = 0;
  for(let amount of cart){
    totalAmount = totalAmount + amount.price;
  }
//Deleting items from cart and wishlist
  const deleteCartItem = (id) => {
    const newCartItems = cart.filter((product) => product.product_id !== id);
    setCart(newCartItems);
  };

  const deleteWishListItem = (id) => {
    const newWishListItems = wishList.filter(
      (product) => product.product_id !== id
    );
    setWishList(newWishListItems);
  };

  //sorting in wishlist and cart
  const sortCartProducts = () => {
    const sortedCart = [...cart].sort((a, b) => b.price - a.price);
    setCart(sortedCart);
  };

  const sortWishListProducts = () => {
    const sortedWishList = [...wishList].sort((a, b) => b.price - a.price);
    setWishList(sortedWishList);
  };

  return (
    <div>
      <div className="text-center bg-red-950 py-40">
        <h1>Dashboard</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <button className="btn">Cart</button>
        <button className="btn">Wishlist</button>
      </div>

      {/* Cart Area */}
      <div>
        <h1 className="text-4xl">Cart</h1>
        <button onClick={sortCartProducts} className="btn">
          Sort by Price
        </button>
        <button className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}>
          Purchase
        </button>
        {cart.map((product) => (
          <div
            key={product.product_id}
            className="border-2 rounded-xl lg:p-5 lg:m-5 lg:flex justify-between items-center"
          >
            <h1>{product.product_title}</h1>
            <h2>{product.price}</h2>
            <button
              onClick={() => deleteCartItem(product.product_id)}
              className="btn bg-red-400 mx-2 my-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      {/* WishList area */}
      <div>
        <h1 className="text-4xl">WishLists</h1>
        <button onClick={sortWishListProducts} className="btn">
          Sort by Price
        </button>
        {wishList.map((product) => (
          <div
            key={product.product_id}
            className="border-2 rounded-xl lg:p-5 lg:m-5 lg:flex justify-between items-center"
          >
            <h1>{product.product_title}</h1>
            <h2>{product.price}</h2>
            <button
              onClick={() => deleteWishListItem(product.product_id)}
              className="btn bg-red-400 mx-2 my-2"
            >
              Delete
            </button>
          </div>
        ))}
        {/* Modal section */}
        <dialog id="my_modal_5" className="modal-overlay modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Payment Successful</h3>
            <hr />
            <p className="py-4">
              Total Amount: ${totalAmount}
            </p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Dashboard;
