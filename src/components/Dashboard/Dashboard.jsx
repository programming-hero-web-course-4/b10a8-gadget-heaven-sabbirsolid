// export default Dashboard;
import React, { useContext, useEffect, useState } from "react";
import { CartHandle, WishListHandle } from "../Root/Root";
import "./Dashboard.css";

const Dashboard = () => {
  const [cart, setCart] = useContext(CartHandle);
  const [wishList, setWishList] = useContext(WishListHandle);
  const [total, setTotal] = useState(0);
  const [activeSection, setActiveSection] = useState("cart"); // New state for active section

  // changing tab name
  useEffect(() => {
    document.title = "Dashboard | Gadget Heaven";
  }, []);

  //Total amount calculation
  useEffect(() => {
    let calculatedTotal = 0;
    for (let item of cart) {
      calculatedTotal += item.price;
    }
    setTotal(calculatedTotal);
  }, [cart]);

  //Deleting items from cart and wishlist
  const deleteCartItem = (id, index) => {
    const newCartItems = cart.filter(
      (product, idx) => idx !== index || product.product_id !== id
    );
    setCart(newCartItems);
  };

  const deleteWishListItem = (id, index) => {
    const newWishListItems = wishList.filter(
      (product, idx) => idx !== index || product.product_id !== id
    );
    setWishList(newWishListItems);
  };

  // Sorting in wishlist and cart
  const sortCartProducts = () => {
    const sortedCart = [...cart].sort((a, b) => b.price - a.price);
    setCart(sortedCart);
  };

  const sortWishListProducts = () => {
    const sortedWishList = [...wishList].sort((a, b) => b.price - a.price);
    setWishList(sortedWishList);
  };
// Total amount handle
  const handleTotalAmount = () => {
    const modal = document.getElementById("my_modal_5");
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div>
      <div className="text-center bg-[#9538E2] py-20">
        <h1 className="text-5xl font-bold px-6 text-white">Dashboard</h1>
        <p className="text-white px-6">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        {/* Dashboard buttons */}
        <div className="space-x-5">
          <button
            className={` font-bold border border-white py-2 px-5 rounded-3xl my-2 ${activeSection === "cart" ? "bg-white text-[#9538E2]" : "text-white"}`}
            onClick={() => setActiveSection("cart")}
          >
            Cart
          </button>
          <button
            className={` font-bold border border-white py-2 px-5 rounded-3xl my-2 ${activeSection === "wishlist" ? "bg-white text-[#9538E2]" : "text-white"}`}
            onClick={() => setActiveSection("wishlist")}
          >
            WishList
          </button>
        </div>
      </div>
      
      {/* cart section*/}
      <div>
        {activeSection === "cart" && (
          <div className="my-5">
            <div className="lg:w-5/6 mx-auto flex items-center justify-between">
              <h1 className="text-3xl font-bold">Cart</h1>
              <div className="flex items-center gap-5">
                <h1 className="font-bold text-xl">Total Balance: ${total}</h1>
                <button
                  onClick={sortCartProducts}
                  className="text-[#9538E2] font-bold border border-purple-600 hover:bg-slate-300 py-2 px-5 rounded-3xl my-2"
                >
                  Sort by Price
                </button>
                <button
                  className="bg-[#9538E2] font-bold hover:bg-slate-300 py-2 px-5 rounded-3xl text-white my-2"
                  onClick={handleTotalAmount}
                >
                  Purchase
                </button>
              </div>
            </div>
            <div className="lg:w-5/6 mx-auto">
              {cart.map((product, index) => (
                <div className="flex border-2 rounded-xl lg:p-5 lg:m-5 lg:flex justify-between items-center" key={`${product.product_id}-${index}`}>
                  <div className="flex items-center">
                    <div className="p-3">
                      <img
                        className="w-[180px] p-2 border border-gray-400 rounded-xl"
                        src={product.product_image}
                        alt=""
                      />
                    </div>
                    <div className="w-2/4">
                      <h1 className="font-bold text-xl">
                        {product.product_title}
                      </h1>
                      <p>{product.description}</p>
                      <h2 className="font-bold">Price: ${product.price}</h2>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => deleteCartItem(product.product_id, index)}
                      className="btn bg-red-400 mx-2 my-2"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
{/* Wishlist sections */}
        {activeSection === "wishlist" && (
          <div className="my-5">
            <div className="lg:w-5/6 mx-auto flex justify-between items-center">
              <h1 className="text-3xl font-bold">WishLists</h1>
              <button
                onClick={sortWishListProducts}
                className="text-[#9538E2] font-bold border border-purple-600 hover:bg-slate-300 py-2 px-5 rounded-3xl my-2"
              >
                Sort by Price
              </button>
            </div>
            <div className="lg:w-5/6 mx-auto">
              {wishList.map((product, index) => (
                <div className="flex border-2 rounded-xl lg:p-5 lg:m-5 lg:flex justify-between items-center" key={`${product.product_id}-${index}`}>
                  <div className="flex items-center">
                    <div className="p-3">
                      <img
                        className="w-[180px] p-2 border border-gray-400 rounded-xl"
                        src={product.product_image}
                        alt=""
                      />
                    </div>
                    <div className="w-2/4">
                      <h1 className="font-bold text-xl">
                        {product.product_title}
                      </h1>
                      <p>{product.description}</p>
                      <h2 className="font-bold">Price: ${product.price}</h2>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => deleteWishListItem(product.product_id, index)}
                      className="btn bg-red-400 mx-2 my-2"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Modal section */}
      <dialog
        id="my_modal_5"
        className="modal-overlay modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">Payment Successful</h3>
          <hr />
          <p className="text-center">Total: ${total}</p>
          <p className="text-center">Thanks for Purchasing</p>
          <div className="modal-action">
            <form className="" method="dialog">
              <button onClick={() => {setCart([]); setTotal(0);}} className="btn">Close</button>
            </form>

          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Dashboard;
