import itemData from "./shop.data";

const INITIAL_STATE = {
  collections: itemData,
};

// console.log(itemData);

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
