import React, { useState, useEffect } from 'react';
import CustomSearch from '../../components/custom-search/custom-search.component';
import SpecialOffer from '../../components/special-offers/special-offer.component';
import SPECIAL_OFFERS from '../../data/special-offers.data';
import PriceControlContextProvider from '../../components/custom-search/price-control-context.component';

const WomensPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [data] = useState(SPECIAL_OFFERS);
  return (
    <div className="shop-page">
      <div>
        <PriceControlContextProvider>
          <CustomSearch />
        </PriceControlContextProvider>
      </div>
      <div>
        <SpecialOffer spcialOffers={data} />
      </div>
    </div>
  );
};

export default WomensPage;
