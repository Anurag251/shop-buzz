import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { url } from "../../urls";
import CustomButton from "../../components/custom-button/custom-button.component";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import FormInput from "../../components/form-input/form-input.component";

const CheckoutPage = ({ cartItems, total }) => {
  const [formValue, setFormValue] = useState({
    fullName: "",
    contactNumber: "",
    address: "",
  });

  let productName = [];
  let productPrice = [];
  let productQuantity = [];

  useEffect(() => {
    window.scrollTo(0, 0);

    if (cartItems[0] !== undefined) {
      const clickMe = document.querySelector("#clickMe");
      const forceToClick = document.querySelector("#forceToClick");
      const shippingAddressPopup = document.querySelector(
        ".shipping-address-popup"
      );
      const shippingPopoupBtn = document.querySelector("#shippingPopoupBtn");
      const closeButton = document.querySelector(".close-button");

      clickMe.addEventListener("click", () => {
        forceToClick.click();
      });

      shippingPopoupBtn.addEventListener("click", () => {
        shippingAddressPopup.classList.add("active");
      });

      closeButton.addEventListener("click", () => {
        shippingAddressPopup.classList.remove("active");
      });
    }
  }, []);

  const handelChange = (event) => {
    const { value, name } = event.target;

    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <div className="checkout">
      <div className="shipping-address-popup">
        <h3>Shipping Information</h3>

        <div className="close-button">
          <i className="fas fa-times"></i>
        </div>
        <div className="form-area">
          <FormInput
            name="fullName"
            type="text"
            handleChange={handelChange}
            value={formValue.fullName}
            lable="Full Name"
            required
          />

          <FormInput
            name="contactNumber"
            type="number"
            handleChange={handelChange}
            value={formValue.contactNumber}
            lable="Contact Number"
            required
          />

          <FormInput
            name="address"
            type="text"
            handleChange={handelChange}
            value={formValue.address}
            lable="Address"
            required
          />

          <CustomButton
            style={{ padding: ".4rem 1rem", fontSize: "14px" }}
            id="clickMe"
          >
            Submit
          </CustomButton>
        </div>
      </div>

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

        {cartItems[0] !== undefined ? (
          <div className="total">
            <span>TOTAL: NRs{total}</span>

            <span>
              <CustomButton id="shippingPopoupBtn">
                <i className="fab fa-whatsapp"></i> What's App Us
              </CustomButton>
              <a
                href={`https://api.whatsapp.com/send?phone=9779817322795&text=${cartItems.map(
                  (cartItem) =>
                    `Product%20Image:%20${cartItem.image}%20|%20Product%20Name:%20${cartItem.name}%20|%20Product%20Quantity:%20${cartItem.quantity}%20|%20Product%20Price:%20${cartItem.price}`
                )}%20|%20User%20Name:%20${
                  formValue.fullName
                }%20|%20User%20Contact:%20${
                  formValue.contactNumber
                }%20|%20User%20Address:%20${formValue.address}`}
                target="blank"
                style={{ display: "none" }}
                id="forceToClick"
              >
                a
              </a>
            </span>
          </div>
        ) : (
          <div className="empty-cart">
            <h3>Your cart is empty</h3>
            <Link to="/new-collections">
              <CustomButton>Continue Shopping</CustomButton>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProrps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProrps)(CheckoutPage);
