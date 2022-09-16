import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { addItem } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/custom-button.component";

const SpecialOfferCard = ({ item, addItem }) => {
  const [itemOnCart, setItemOnCart] = useState(false);

  if (itemOnCart === true) {
    setTimeout(() => {
      setItemOnCart(false);
    }, 2000);
  }

  const { id, image, tag, name, price, discount } = item;

  return (
    <div className="special-offers-card">
      <div className={`message-pop-up ${itemOnCart !== false ? "active" : ""}`}>
        Item Added To Cart
      </div>
      <div className="image" style={{ backgroundImage: `url(${image})` }}>
        <div className={`${tag ? "ribbon" : ""}`}>
          <div className={`tag ${tag}`}>{tag}</div>
        </div>
        <div className="quick-view">
          <i className="fas fa-search"></i>
        </div>
        <CustomButton
          onClick={() => {
            addItem(item);
            setItemOnCart(true);
          }}
        >
          Add To Cart
        </CustomButton>
      </div>
      <div className="content">
        <Link to={`product-details/${id}`}>
          <h4>{name}</h4>
        </Link>
        <del>Rs: {discount}</del>
        <h6>Rs: {price} /- </h6>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(SpecialOfferCard);
