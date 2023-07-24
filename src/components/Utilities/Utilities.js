const addToDb = id => {
    const shoppingCart = getShoppingCart();
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}
const removeItem = id => {
    const shoppingCart = getShoppingCart();
    if(id in shoppingCart){
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}

const getShoppingCart = () => {
    let shoppingCart = {};
    const previousCart = localStorage.getItem('shopping-cart');
    if (previousCart){
        shoppingCart = JSON.parse(previousCart);
    }
    return shoppingCart;
}
const deleteCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    removeItem,
    getShoppingCart,
    deleteCart
}