import React, { useContext } from 'react';
import {CartContext} from './Context';

const Cart = () => {
    const [cart, setCart] = useContext(CartContext);

    return (
        <>
        {cart.map((item, idx) => (
            <div className="Product-Preview" key={idx}>
            <img className="Product-Preview__img" src={item.source}/>
            <div className="Product-Preview__badge">Popular</div>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <p className="Product-Preview__title">{item.title}</p>
            <p className="Product-Preview__brand">{item.brand}</p>
            <p className="Product-Preview__title">{item.price}</p>
        </div>
        ))}
        </>
    )
}

export default Cart;