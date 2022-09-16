import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { addItem } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/custom-button.component";

const CollectionsPreview = ({ item, addItem, setItemOnCart }) => {
  const [itemOnCarts, setItemOnCarts] = useState(false);
  const history = useHistory();

  if (itemOnCarts === true) {
    setTimeout(() => {
      setItemOnCarts(false);
    }, 2000);
  }

  const { id, name, image, price } = item;
  return (
    <div className="collection-preview">
      <div
        className={`message-pop-up ${itemOnCarts !== false ? "active" : ""}`}
      >
        Item Added To Cart
      </div>
      <div className="effect">
        <div className="image" style={{ backgroundImage: `url(${image})` }} />
        <CustomButton
          onClick={() => {
            addItem(item);
            if (history.location.pathname !== "shop/") {
              setItemOnCarts(true);
            } else {
              setItemOnCart(true);
            }
          }}
        >
          Add To Cart
        </CustomButton>
      </div>
      <div className="collection-footer">
        <Link to={`product-details/${id}`}>
          <h3>{name}</h3>
        </Link>
        <h6>Nrs: {price}/-</h6>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionsPreview);
