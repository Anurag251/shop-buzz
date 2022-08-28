import React from 'react';
import FeatureProductCardList from './feature-product-card-list.component';

const FeatureProduct = (props) => {
  return (
    <div className="feature-product">
      <div className="title">Feature Product</div>
      <FeatureProductCardList featureProduct={props.featureProduct} />
    </div>
  );
};

export default FeatureProduct;
