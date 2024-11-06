import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartHandle } from "../Root/Root";

const Offer = ({ product }) => {
  // getting products
  const { product_id, product_image, product_title, price, discounts } =
    product;
  // accessing cart
  const [cart, setCart] = useContext(CartHandle);
  return (
    // Product individual card
    <div className="card bg-base-100 w-11/12 lg:w-10/12 md:w-full mx-auto shadow-xl m-5">
      <figure className="border border-gray-200 rounded-2xl p-2 m-2">
        <img
          className=" rounded-xl h-[200px] object-cover"
          src={product_image}
          alt={product_title}
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product_title}</h2>
        <p>Price: ${price}</p>
        <h1 className="font-bold text-2xl">Discounts: {discounts}</h1>

        {/* cart and details button */}
        <div className="card-actions justify-center flex items-center">
          <Link to={`/details/${product_id}`}>
            <button className="text-[#9538E2] py-2 px-5 hover:bg-slate-200 rounded-3xl border font-bold border-purple-500">
              View Details
            </button>
          </Link>
          <button
            onClick={() => {
              setCart([...cart, product]);
              toast.success("Successfully added to Cart");
            }}
            className="bg-[#9538E2] font-bold hover:bg-slate-500 py-2 px-5 rounded-3xl text-white my-2 "
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
Offer.propTypes = {
  product: PropTypes.object
}
export default Offer;
