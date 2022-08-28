import React from 'react';

const FeatureProductCard = ({ featureProduct }) => {
  return (
    <div className="card">
      <div className="for-image">
        <div
          className="image"
          style={{ backgroundImage: `url(${featureProduct.imageURL})` }}
        ></div>
        <div className="explore">Shop Now</div>
      </div>
      <div className="content">
        <h4>{featureProduct.title}</h4>
        <h6>{featureProduct.price}</h6>
      </div>
    </div>
  );
};

export default FeatureProductCard;
