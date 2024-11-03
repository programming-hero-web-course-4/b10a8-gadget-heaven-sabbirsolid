import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {product_id} = useParams();
    const id = parseInt(product_id);
    const data = useLoaderData();
    const selectedProduct = data.find(product => product.product_id === id)
    // console.log(selectedProduct);
    const {rating,availability,specification,description,product_image,product_title,price}  = selectedProduct;
    return (
        <div>
            <div className='text-center bg-red-950 py-40'>
                <h1>Product Details</h1>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className='w-1/2 mx-auto'>
                <img src={product_image} alt={product_title} />
                <h3>Price: {price}</h3>
                {availability? "In Stock": "Stock Out"}
                <p>{description}</p>
                <h4>Specifications</h4>
                {/* {
                    specification.map(item => <p>{item}</p>)
                } */}
                <p>Rating: <br />
                    {rating}
                </p>
                <button className='btn'>Add to cart</button>
                <button className='btn'>WishList</button>
            </div>
        </div>
    );
};

export default ProductDetails;