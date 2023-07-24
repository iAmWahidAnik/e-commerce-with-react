import React, { children } from 'react';
import './Cart.css'

const Cart = ({cart, deleteWholeCart, children}) => {
    // console.log(cart)
    // console.log(children)
    let priceTotal = 0;
    let shippingTotal = 0;
    let quantity = 0;
    for (const product of cart){
        if(product.quantity === 0){
            product.quantity = 1;
        }

        priceTotal = priceTotal + product.price * product.quantity;
        shippingTotal = shippingTotal + product.shipping * product.quantity;
        quantity = quantity + product.quantity;
    }
    const tax = priceTotal*7/100;
    const grandTotal = priceTotal + shippingTotal + tax;
    return (
        <div className='cart-container'>
            <h3>Order Summary</h3>
            <p>Selected Items : {quantity}</p>
            <p>Total Price : ${priceTotal}</p>
            <p>Total Shipping Charge : ${shippingTotal}</p>
            <p>Tax : ${tax.toFixed(2)}</p>
            <h4>Grand Total : ${grandTotal.toFixed(2)}</h4>
            <button onClick={deleteWholeCart} className='btn-clear-cart'>Clear Cart</button>
            {children}
        </div>
    );
};

export default Cart;