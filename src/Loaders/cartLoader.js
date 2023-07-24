import { getShoppingCart } from "../components/Utilities/Utilities";

const cartLoader = async () => {
    const getData = await fetch('products.json');
    const data = await getData.json();
    
    const storedCart = getShoppingCart();
    const savedCart = [];
    
    for(const id in storedCart){
        const addedProduct = data.find(pd => pd.id === id);
        if(addedProduct){
            const quantity = storedCart[id]
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }

    return savedCart;
}

export default cartLoader;