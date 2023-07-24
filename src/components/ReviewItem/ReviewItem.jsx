import React from 'react'
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product, handleDeleteCart }) => {
    // console.log(handleDeleteCart);
    const { id, img, price, quantity, name } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='details-container'>
                <p className='product-title'>{name}</p>
                <p className='price'>Price : <span className='text-style'>{price}</span></p>
                <p className='quantity'>Order Quantity : <span className='text-style'>{quantity}</span></p>
            </div>
            <button onClick={() => handleDeleteCart(id)}>
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    );
};

export default ReviewItem;