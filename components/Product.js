import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../context/Product.context';


export const Product = () => {
    const { products } = useContext(ProductsContext);
    // hook שמכיל את כל הפרמטרים מה 
    // url
    const { productIndex } = useParams();
    const product =  products[parseInt(productIndex) - 1];
    return <> 
        <h2>Product </h2>
        { product ? <p>  { product.name } | { product.price } </p> : 'no product'}
    </>
     
}