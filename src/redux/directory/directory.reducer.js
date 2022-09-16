import mensImage from "../../assets/product/clothing/mens-collections/mens.jpeg";
import womensImage from "../../assets/product/clothing/womens-collections/p-women1.jpeg";
import jacketImage from "../../assets/product/clothing/men-women/men-women1.jpeg";
import sneakerImage from "../../assets/product/categories/sneakers.jpeg";
import printTshirtImage from "../../assets/product/clothing/new-collections/tshirt.jpeg";
import { urls } from "../../urls";

// const INITIAL_STATE = {
//   sections: [
//     {
//       title: "Dashain",
//       imageUrl: printTshirtImage,
//       id: 1,
//       linkUrl: "shop/dashain",
//     },
//     {
//       title: "sneakers",
//       imageUrl: sneakerImage,
//       id: 2,
//       linkUrl: "shop/sneakers",
//     },
//     {
//       title: "Jackets",
//       imageUrl: jacketImage,
//       id: 3,
//       linkUrl: "shop/jackets",
//     },
//     {
//       title: "womens",
//       imageUrl: womensImage,
//       size: "large",
//       id: 4,
//       linkUrl: "shop/womens",
//     },
//     {
//       title: "mens",
//       imageUrl: mensImage,
//       size: "large",
//       id: 5,
//       linkUrl: "shop/mens",
//     },
//   ],
// };

let INITIAL_STATE = {
  sections: [],
};

fetch(urls + "/category")
  .then((res) => res.json())
  .then((datas) => {
    datas.forEach((data) => {
      INITIAL_STATE.sections.push(data);
    });
  });

const directoryReducer = (state = INITIAL_STATE, action) => {
  if (
    INITIAL_STATE.sections[0] !== undefined ||
    INITIAL_STATE.sections[0] !== null
  ) {
    switch (action.type) {
      default:
        return state;
    }
  }
};

export default directoryReducer;
