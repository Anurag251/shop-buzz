import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';

const SpecialOfferCard = ({ item, addItem }) => {
  const { imageUrl, tag, name, mainPrice, price } = item;
  return (
    <div className="special-offers-card">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className={`${tag ? 'ribbon' : ''}`}>
          <div className="tag">{tag}</div>
        </div>
        <div className="quick-view">
          <i className="fas fa-search"></i>
        </div>
        <CustomButton onClick={() => addItem(item)}>Add To Cart</CustomButton>
      </div>
      <div className="content">
        <h4>{name}</h4>
        <del>NRs: {mainPrice}</del>
        <h6>NRs: {price} /- </h6>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(SpecialOfferCard);
