import React from 'react';
import "./Cart.css";

function Cart(props) {
    const cart = props.cart;
    let totalSalary = cart.reduce((total, cart) => total + cart.salary, 0);
    return (
        <div>
            <div className="cart-list">
                <p>Player Total Salary: <strong>{totalSalary}</strong></p>
            </div>
            <div className="cart-player">
                <h2>Your Selected Players:</h2>
                <ul>{cart.map(info => <li><p>{info.name + " Selected! "}</p><p>Salary: {info.salary}</p></li>)}</ul>
            </div>
        </div>
    );
}

export default Cart;