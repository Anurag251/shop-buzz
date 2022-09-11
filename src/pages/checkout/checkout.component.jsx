import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckoutPage = ({ cartItems, total }) => {
  let productName = [];
  let productPrice = [];
  let productQuantity = [];

  return (
    <div className="checkout">
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map((cartItem) => {
          productName.push(cartItem.name ? cartItem.name : cartItem.title);
          productPrice.push(cartItem.price);
          productQuantity.push(cartItem.quantity);
          return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
        })}

        {console.log(productName)}

        <div className="total">
          <span>TOTAL: NRs{total}</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProrps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProrps)(CheckoutPage);
