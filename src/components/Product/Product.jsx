import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  // console.log(product);
  const {product_id, product_image, product_title, price} = product;

  return (
    // Product card
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={product_image}
          alt={product_title}
          className="rounded-xl"
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

export default Product;
