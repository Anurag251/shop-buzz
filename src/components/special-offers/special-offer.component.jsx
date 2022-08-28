import React from 'react';
import SpecialOfferCardList from './special-offer-card-list.component';

const SpecialOffer = (props) => {
  return (
    <div className="special-offers">
      <div className="title">Special Offers</div>
      <SpecialOfferCardList spcialOffers={props.spcialOffers} />
    </div>
  );
};

export default SpecialOffer;
