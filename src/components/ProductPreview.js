import React, {useContext, useState} from 'react';
import { CartContext } from './Context';

const ProductPreview = ({product}) => {

    const {source, title, brand, price} = product;
    const [cart, setCart] = useContext(CartContext);
    const addToCart = (e) => {
        e.preventDefault();
        setCart(prevState => [...prevState, product]);
    }

    return(
    <div className="Product-Preview">
        <img className="Product-Preview__img" src={source}/>
        <div className="Product-Preview__badge">Popular</div>
        <div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <p className="Product-Preview__title">{title}</p>
        <p className="Product-Preview__brand">{brand}</p>
        <p className="Product-Preview__title">{price}</p>
        <button type="button" onClick={addToCart}>Add to cart</button>
    </div>
    )
    
};

export {ProductPreview};