import React, { useContext, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { CartHandle, WishListHandle } from "../Root/Root";
// import cartImg from '../../assets/cart.png'
import heartImg from '../../assets/heart.png'

const ProductDetails = () => {
  
  //Tab Name
  useEffect(() => {
    document.title = "Product Details | Gadget Heaven";
  }, []);

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

  const handleAddToWishlist = () => {
    const isProductInWishlist = wishList.some(item => item.product_id === id);
    
    if (!isProductInWishlist) {
      setWishList([...wishList, selectedProduct]);
    } else {
      alert('Product is already in the wishlist');
    }
  };

  return (
    <div>
      {/* Heading for product details */}
      <div className="text-center bg-[#9538E2]  pt-10 pb-40">
        <h1 className="text-5xl font-bold  px-6 text-white">
          Product Details
        </h1>
        <p className="text-white px-6">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      {/* Product details card */}
      <div className="mt-10 lg:w-8/12 w-11/12 mx-auto border p-4 rounded-2xl relative bottom-40 lg:bottom-40 bg-white bg-opacity-20">
        <div className="lg:flex items-center rounded-xl bg-white">
          <div className="p-5">
            <img className="w-5/6 rounded-xl" src={product_image} alt="" />
          </div>
          <div className="p-5">
            <h1 className="text-2xl font-bold">{product_title}</h1>
            <h3 className="text-lg font-bold">Price: ${price}</h3>
            {
              availability ? <p className="text-center text-green-600 py-1 px-2  rounded-3xl font-bold w-32 border-green-600 bg-green-100">In Stock</p>: <p className="text-center text-red-600 py-1 px-2 w-32 lg:w-2/12 rounded-3xl font-bold border-red-600 bg-red-100">Out of Stock</p>
            }
            <p>{description}</p>
            <h4 className="font-bold">Specifications</h4>
            <ul>
              {Specification.map((spec, index) => (
                <li key={index}> ~{spec}</li>
              ))}
            </ul>
            <p className="font-bold">
              Rating:  {rating}
            </p>
          </div>
        </div>
        {/* add to cart and wishlist buttons */}
        <div className="flex items-center mt-5 justify-center space-x-8">
          <button
            onClick={() => setCart([...cart, selectedProduct])}
            className="bg-[#9538E2] font-bold hover:bg-slate-500 py-3 px-5 rounded-3xl text-white my-2 " 
          >
            Add to cart 
          </button>
          <button onClick={handleAddToWishlist}
            className="indicator rounded-full p-3 border-2 hover:bg-slate-500"
          ><img className="w-5" src={heartImg} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;