import React from 'react';
import ReactModal from '../ReactModal/ReactModal';

const SingleProduct = ({ product, setCartCount }) => {
    return (
        <div className="col-md-4 ">
            <div className="cart p-3 border h-80">
                <img src={product.image} className="w-50 m-auto" alt="" />
                <h4>{product.title.slice(0, 30)}</h4>
                <div className='d-flex justify-content-around'>
                    <button onClick={setCartCount} className='btn btn-success'>Add To Cart</button>
                    <button className='btn btn-danger'>Delete</button>
                    {/* <button className='btn btn-info'>Details</button> */}
                    <ReactModal product={product}></ReactModal>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;