import React from 'react';
import './Product.css'

const Product = props => {
    const { name, seller, price, img, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div>
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>Price : ${price}</p>
                <p className='last-two'>Manufacturer : {seller}</p>
                <p className='last-one'>Ratings : {ratings} star</p>
            </div>
            <button className='cart-btn'>Add to cart</button>
        </div>
    );
};

export default Product;