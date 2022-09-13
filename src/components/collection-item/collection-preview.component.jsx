import React, { useState } from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/custom-button.component";

const CollectionsPreview = ({ item, addItem }) => {
  const [itemOnCart, setItemOnCart] = useState(false);

  if (itemOnCart === true) {
    setTimeout(() => {
      setItemOnCart(false);
    }, 2000);
  }

  const { name, image, price } = item;
  return (
    <div className="collection-preview">
      <div className={`message-pop-up ${itemOnCart !== false ? "active" : ""}`}>
        Item Added To Cart
      </div>
      <div className="effect">
        <div className="image" style={{ backgroundImage: `url(${image})` }} />
        <CustomButton
          onClick={() => {
            addItem(item);
            setItemOnCart(true);
          }}
        >
          Add To Cart
        </CustomButton>
      </div>
      <div className="collection-footer">
        <h3>{name}</h3>
        <h6>Nrs: {price}/-</h6>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionsPreview);
