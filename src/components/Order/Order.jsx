import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
import { deleteCart, removeItem } from '../Utilities/Utilities';

const Order = () => {
    const savedCart = useLoaderData()
    // console.log(cart);
    const [cart, setCart] = useState(savedCart);
    const deleteWholeCart = () => {
        setCart([]);
        deleteCart();
    }
    const handleDeleteCart = (id) => {
        const newCart = cart.filter(pd => pd.id !== id);
        setCart(newCart);
        removeItem(id);
    }
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleDeleteCart={handleDeleteCart}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart'>
                <Cart cart={cart} deleteWholeCart={deleteWholeCart}>
                    <div>
                        <Link to='/checkout'>
                        <button className='btn-clear-cart'>proceed to checkout</button>
                        </Link>
                    </div>
                </Cart>
            </div>
        </div>
    );
};

export default Order;