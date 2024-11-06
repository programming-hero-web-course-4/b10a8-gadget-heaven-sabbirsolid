import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
const Product = ({ product }) => {
  const {product_id, product_image, product_title, price} = product;

  return (
    // individual Product card
    <div className="card bg-base-100 w-11/12 lg:w-10/12 md:w-full mx-auto shadow-xl m-5">
      <figure className="border border-gray-200 rounded-2xl p-2 m-2">
        <img  className="rounded-xl h-[200px] object-cover"
          src={product_image}
          alt={product_title}
          
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product_title}</h2>
        <p>Price: ${price}</p>
        <div className="card-actions">
          <Link to={`/details/${product_id}`}><button className="text-[#9538E2] py-2 px-5 hover:bg-slate-200 rounded-3xl border font-bold border-purple-500">View Details</button></Link>
      
        </div>
      </div>
    </div>
  );
};
Product.propTypes = {
  product: PropTypes.object
}
export default Product;
