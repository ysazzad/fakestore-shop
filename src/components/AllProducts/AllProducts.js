import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './AllProducts.css'

const AllProducts = ({ setCartCount }) => {
    const [products, setProducts] = useState([])
    console.log(products);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])
    return (
        <div>
            <h1>All Products</h1>
            <div className="row">
                {
                    products.map(pd => <SingleProduct key={pd.id} product={pd} setCartCount={setCartCount}></SingleProduct>)
                }
            </div>

        </div>
    );
};

export default AllProducts;