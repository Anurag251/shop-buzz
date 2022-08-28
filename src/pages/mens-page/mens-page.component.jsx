import React, { useState, useEffect } from 'react';
import CustomSearch from '../../components/custom-search/custom-search.component';
import FeatureProduct from '../../components/feature-product/feature-product.component';
import FEATURED_DATA from '../../data/feature-product.data';
import PriceControlContextProvider from '../../components/custom-search/price-control-context.component';

const MensPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [data2] = useState(FEATURED_DATA);
  return (
    <div className="shop-page">
      <div>
        <PriceControlContextProvider>
          <CustomSearch />
        </PriceControlContextProvider>
      </div>
      <div>
        <FeatureProduct featureProduct={data2} />
      </div>
    </div>
  );
};

export default MensPage;
