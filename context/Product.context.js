import React, { useState } from 'react';
import { products } from '../data/products';

export const ProductsContext = React.createContext({});


export const ProductContextProvider = (props) => {
    const [_products, setProducts] = useState(products);

    const contextValue = {
        products: _products,
        addProduct(product) {
            setProducts([..._products, product]);
        }
    };

    return <ProductsContext.Provider value={contextValue} >
        {props.children}
    </ProductsContext.Provider>
}