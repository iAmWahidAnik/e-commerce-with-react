import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = props => {
    const { name, seller, price, img, ratings } = props.product;
    const addToCart = props.addToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div>
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>Price : ${price}</p>
                <p className='last-two'>Manufacturer : {seller}</p>
                <p className='last-one'>Ratings : {ratings} star</p>
            </div>
            <button onClick={ () => addToCart(props.product)} className='cart-btn'>
                add to cart  
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;