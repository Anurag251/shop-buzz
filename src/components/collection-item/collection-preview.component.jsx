import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';

const CollectionsPreview = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="collection-preview">
      <div className="effect">
        <div
          className="image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <CustomButton onClick={() => addItem(item)}>Add To Cart</CustomButton>
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
