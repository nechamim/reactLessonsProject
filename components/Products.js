import React, { useContext } from 'react';
import { Link, Outlet  } from "react-router-dom";
import { ProductsContext } from '../context/Product.context';

export const Products = () => {
    const { products } = useContext(ProductsContext);
    return <>
        <h1>Products</h1>
        <ul className="products">
            { products.map((p, i) => <li key={p.code}> 
            <Link to={"/products/" + (i + 1)}>{i + 1} </Link></li>) }
        </ul>
        <div>
            <h3>Selected Product</h3>
            {/* כאן נכנס החלק של הניתוב שאמור להתחלף - בניתוב פנימי */}
            <Outlet />
        </div>
    </>
}

// tabnine