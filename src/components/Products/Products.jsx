import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./gadgets.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='py-5'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>Explore Lovely Gadgets</h1>
            </div>
            <div>
                <div className=''>
                <button className="btn">Button</button>
                <button className="btn">Button</button>
                <button className="btn">Button</button>
                <button className="btn">Button</button>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        products.map(product => <Product key={product.product_id} product={product}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;