import React, { createContext, useState } from 'react';

export const PriceControlContext = createContext();

const PriceControlContextProvider = (props) => {
  const [minPriceRange, setMinPriceRange] = useState(0);
  const [maxPriceRange, setMaxPriceRange] = useState(0);

  const changeMinPrice = (price) => {
    setMinPriceRange(price);
  };

  const changeMaxPrice = (price) => {
    setMaxPriceRange(price);
  };

  return (
    <PriceControlContext.Provider
      value={{ minPriceRange, maxPriceRange, changeMaxPrice, changeMinPrice }}
    >
      {props.children}
    </PriceControlContext.Provider>
  );
};

export default PriceControlContextProvider;
