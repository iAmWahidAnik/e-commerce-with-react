import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, deleteCart, getShoppingCart } from '../Utilities/Utilities';
import './Shop.css'
import { Link } from 'react-router-dom';

const Shop = (props) => {
    // console.log(props)
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const deleteWholeCart = () => {
        setCart([]);
        deleteCart();
    }
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }
    useEffect(() => {
        const getCart = getShoppingCart();
        const previousCart = [];
        // step 1
        if (products.length === 0) {
            return;
        }
        for (const id in getCart) {
            // step 2
            const savedProduct = products.find(product => product.id === id);
            // console.log(savedProduct);
            // step 3
            const quantity = getCart[id]
            savedProduct.quantity = quantity;
            previousCart.push(savedProduct);
            // console.log(savedProduct);
        }
        setCart(previousCart);
        // console.log(previousCart)
    }, [products])
    return (
        <div className='shop-container'>
            <div className='products'>
                {
                    products.map(product => <Product key={product.id} product={product} addToCart={addToCart}></Product>)
                }
            </div>
            <div className='cart'>
                <Cart cart={cart} deleteWholeCart={deleteWholeCart}>
                    <Link to='/order'>
                        <button className='btn-clear-cart'>Order Review</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;