import mensImage from "../../assets/product/clothing/mens-collections/mens.jpeg";
import womensImage from "../../assets/product/clothing/womens-collections/p-women1.jpeg";
import jacketImage from "../../assets/product/clothing/men-women/men-women1.jpeg";
import sneakerImage from "../../assets/product/categories/sneakers.jpeg";
import printTshirtImage from "../../assets/product/clothing/new-collections/tshirt.jpeg";

const INITIAL_STATE = {
  sections: [
    {
      title: "tshirt",
      imageUrl: printTshirtImage,
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "sneakers",
      imageUrl: sneakerImage,
      id: 2,
      linkUrl: "shop/sneakers",
    },
    {
      title: "Jodi Set",
      imageUrl: jacketImage,
      id: 3,
      linkUrl: "shop/jackets",
    },
    {
      title: "womens",
      imageUrl: womensImage,
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl: mensImage,
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
