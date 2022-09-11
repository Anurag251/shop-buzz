import React from "react";

const CartItem = ({ item: { image, price, title, name, quantity } }) => {
  return (
    <div className="cart-item">
      <div className="image" style={{ backgroundImage: `url(${image})` }} />
      <div className="item-details">
        <span className="name">
          {name} {title}
        </span>
        <span className="price">
          {quantity} x Rs.{price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
