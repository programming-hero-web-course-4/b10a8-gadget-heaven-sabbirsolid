// import React, { useContext } from "react";
// import { useLoaderData, useParams } from "react-router-dom";
// import { CartHandle } from '../Root/Root';

// const ProductDetails = () => {
//   const { product_id } = useParams();
//   const information = useLoaderData();
// //   console.log(Array.isArray(information));
// //   console.log(information);
//   const id = parseInt(product_id);
//   const selectedProduct = information.find(
//     (product) => product.product_id === id
//   );
//   const {
//     rating,
//     availability,
//     Specification,
//     description,
//     product_image,
//     product_title,
//     price,
//   } = selectedProduct;
//   const [cart, setCart] = useContext(CartHandle);
//   return (
//     <div>
//       <div className="text-center bg-red-950 py-40">
//         <h1>Product Details</h1>
//         <p>Lorem ipsum dolor sit amet consectetur.</p>
//       </div>
//       <div className="w-1/2 mx-auto">
//         <img src={product_image} alt={product_title} />
//         <h3>Price: {price}</h3>
//         {availability ? "In Stock" : "Stock Out"}
//         <p>{description}</p>
//         <h4>Specifications {Specification.map(a => <li>{a}</li>)}</h4>
//         <p>
//           Rating: <br />
//           {rating}
//         </p>
//         <p>Cart: {cart}</p>
//         <button onClick={() => setCart([...cart, selectedProduct])} className="btn">Add to cart</button>
//         {/* <button onClick={() => setCart([price,product_title])} className="btn">Add to cart</button> */}
//         <button className="btn">WishList</button>
//       </div>
//     </div>
//   );
// };
// export default ProductDetails;

import React, { useContext, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { CartHandle, WishListHandle } from '../Root/Root';

const ProductDetails = () => {
   //Tab Name
  useEffect(() => {
    document.title = 'Product Details | Gadget Heaven';
  },[])

  // Getting Product id and Loading data
  const { product_id } = useParams();
  const information = useLoaderData(); 

  const id = parseInt(product_id);
  const selectedProduct = information.find(
    (product) => product.product_id === id
  );

  if (!selectedProduct) {
    return <p>Product not found</p>;
  }
//destructuring selected items
  const {
    rating,
    availability,
    Specification,
    description,
    product_image,
    product_title,
    price,
  } = selectedProduct;
//getting data from other components
  const [cart, setCart] = useContext(CartHandle);
  const [wishList, setWishList] = useContext(WishListHandle);

  return (
    <div>
      <div className="text-center bg-red-950 py-40">
        <h1>Product Details</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      {/* Product details div */}
      <div className="w-1/2 mx-auto">
        <img src={product_image} alt={product_title} />
        <h3>Price: {price}</h3>
        <p>{availability ? "In Stock" : "Stock Out"}</p>
        <p>{description}</p>
        <h4>Specifications</h4>
        <ul>
          {Specification.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
        <p>Rating: {rating}</p>
        <p>Cart Items: {cart.length}</p>
        <button onClick={() => setCart([...cart, selectedProduct])} className="btn">
          Add to cart
        </button>
        <button onClick={() => setWishList([...wishList, selectedProduct])} className="btn">WishList</button>
      </div>
    </div>
  );
};

export default ProductDetails;
