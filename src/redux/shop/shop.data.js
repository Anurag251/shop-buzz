// import mensImage1 from "../../assets/product/clothing/mens-collections/p-mens1.jpeg";
// import mensImage2 from "../../assets/product/clothing/mens-collections/p-mens2.jpeg";
// import mensImage3 from "../../assets/product/clothing/mens-collections/p-mens3.jpeg";
// import mensImage4 from "../../assets/product/clothing/mens-collections/p-mens4.jpeg";
// import mensImage5 from "../../assets/product/clothing/mens-collections/p-mens5.jpeg";
// import mensImage6 from "../../assets/product/clothing/mens-collections/p-mens6.jpeg";
// import mensImage7 from "../../assets/product/clothing/mens-collections/p-mens7.jpeg";
// import mensImage8 from "../../assets/product/clothing/mens-collections/p-mens8.jpeg";
// import mensImage9 from "../../assets/product/clothing/mens-collections/p-mens9.jpeg";
// import mensImage10 from "../../assets/product/clothing/mens-collections/p-mens10.jpeg";
// import mensImage11 from "../../assets/product/clothing/mens-collections/p-mens11.jpeg";
// import mensImage12 from "../../assets/product/clothing/mens-collections/p-mens12.jpeg";
// import mensImage13 from "../../assets/product/clothing/mens-collections/p-mens13.jpeg";

// import womenImage1 from "../../assets/product/clothing/womens-collections/p-women1.jpeg";
// import womenImage2 from "../../assets/product/clothing/womens-collections/p-women2.jpeg";
// import womenImage3 from "../../assets/product/clothing/womens-collections/p-women3.jpeg";
// import womenImage4 from "../../assets/product/clothing/womens-collections/p-women4.jpeg";
// import womenImage5 from "../../assets/product/clothing/womens-collections/p-women5.jpeg";
// import womenImage6 from "../../assets/product/clothing/womens-collections/p-women6.jpeg";
// import womenImage7 from "../../assets/product/clothing/womens-collections/p-women7.jpeg";
// import womenImage8 from "../../assets/product/clothing/womens-collections/p-women8.jpeg";
// import womenImage9 from "../../assets/product/clothing/womens-collections/p-women9.jpeg";
// import womenImage10 from "../../assets/product/clothing/womens-collections/p-women10.jpeg";
// import womenImage11 from "../../assets/product/clothing/womens-collections/p-women11.jpeg";
// import womenImage12 from "../../assets/product/clothing/womens-collections/p-women12.jpeg";
// import womenImage13 from "../../assets/product/clothing/womens-collections/p-women13.jpeg";
// import womenImage14 from "../../assets/product/clothing/womens-collections/p-women14.jpeg";
import { urls } from "../../urls";

// const SHOP_DATA = {
//   hats: {
//     id: 1,
//     title: "Hats",
//     routeName: "hats",
//     items: [
//       {
//         id: 1,
//         name: "Brown Brim",
//         imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
//         price: 25,
//       },
//       {
//         id: 2,
//         name: "Blue Beanie",
//         imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
//         price: 18,
//       },
//       {
//         id: 3,
//         name: "Brown Cowboy",
//         imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
//         price: 35,
//       },
//       {
//         id: 4,
//         name: "Grey Brim",
//         imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
//         price: 25,
//       },
//       {
//         id: 5,
//         name: "Green Beanie",
//         imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
//         price: 18,
//       },
//       {
//         id: 6,
//         name: "Palm Tree Cap",
//         imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
//         price: 14,
//       },
//       {
//         id: 7,
//         name: "Red Beanie",
//         imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
//         price: 18,
//       },
//       {
//         id: 8,
//         name: "Wolf Cap",
//         imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
//         price: 14,
//       },
//       {
//         id: 9,
//         name: "Blue Snapback",
//         imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
//         price: 16,
//       },
//     ],
//   },
//   sneakers: {
//     id: 2,
//     title: "Sneakers",
//     routeName: "sneakers",
//     items: [
//       {
//         id: 10,
//         name: "Adidas NMD",
//         imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
//         price: 220,
//       },
//       {
//         id: 11,
//         name: "Adidas Yeezy",
//         imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
//         price: 280,
//       },
//       {
//         id: 12,
//         name: "Black Converse",
//         imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
//         price: 110,
//       },
//       {
//         id: 13,
//         name: "Nike White AirForce",
//         imageUrl: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
//         price: 160,
//       },
//       {
//         id: 14,
//         name: "Nike Red High Tops",
//         imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
//         price: 160,
//       },
//       {
//         id: 15,
//         name: "Nike Brown High Tops",
//         imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
//         price: 160,
//       },
//       {
//         id: 16,
//         name: "Air Jordan Limited",
//         imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
//         price: 190,
//       },
//       {
//         id: 17,
//         name: "Timberlands",
//         imageUrl: "https://i.ibb.co/Mhh6wBg/timberlands.png",
//         price: 200,
//       },
//     ],
//   },
//   jackets: {
//     id: 3,
//     title: "Jackets",
//     routeName: "jackets",
//     items: [
//       {
//         id: 18,
//         name: "Black Jean Shearling",
//         imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
//         price: 125,
//       },
//       {
//         id: 19,
//         name: "Blue Jean Jacket",
//         imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
//         price: 90,
//       },
//       {
//         id: 20,
//         name: "Grey Jean Jacket",
//         imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
//         price: 90,
//       },
//       {
//         id: 21,
//         name: "Brown Shearling",
//         imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
//         price: 165,
//       },
//       {
//         id: 22,
//         name: "Tan Trench",
//         imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
//         price: 185,
//       },
//     ],
//   },
//   womens: {
//     id: 4,
//     title: "Womens",
//     routeName: "womens",
//     items: [
//       {
//         id: 23,
//         name: "Blue Tanktop",
//         imageUrl: womenImage1,
//         price: 25,
//       },

//       {
//         id: 24,
//         name: "Floral Blouse",
//         imageUrl: womenImage2,
//         price: 20,
//       },

//       {
//         id: 25,
//         name: "Floral Dress",
//         imageUrl: womenImage3,
//         price: 80,
//       },

//       {
//         id: 26,
//         name: "Red Dots Dress",
//         imageUrl: womenImage4,
//         price: 80,
//       },

//       {
//         id: 27,
//         name: "Striped Sweater",
//         imageUrl: womenImage5,
//         price: 45,
//       },

//       {
//         id: 28,
//         name: "Yellow Track Suit",
//         imageUrl: womenImage6,
//         price: 135,
//       },

//       {
//         id: 29,
//         name: "White Blouse",
//         imageUrl: womenImage7,
//         price: 20,
//       },

//       {
//         id: 23,
//         name: "Blue Tanktop",
//         imageUrl: womenImage8,
//         price: 25,
//       },

//       {
//         id: 24,
//         name: "Floral Blouse",
//         imageUrl: womenImage9,
//         price: 20,
//       },

//       {
//         id: 25,
//         name: "Floral Dress",
//         imageUrl: womenImage10,
//         price: 80,
//       },

//       {
//         id: 26,
//         name: "Red Dots Dress",
//         imageUrl: womenImage11,
//         price: 80,
//       },

//       {
//         id: 27,
//         name: "Striped Sweater",
//         imageUrl: womenImage12,
//         price: 45,
//       },

//       {
//         id: 28,
//         name: "Yellow Track Suit",
//         imageUrl: womenImage13,
//         price: 135,
//       },

//       {
//         id: 29,
//         name: "White Blouse",
//         imageUrl: womenImage14,
//         price: 20,
//       },
//     ],
//   },
//   mens: {
//     id: 5,
//     title: "Mens",
//     routeName: "mens",
//     items: [
//       {
//         id: 30,
//         name: "Camo Down Vest",
//         imageUrl: mensImage1,
//         price: 325,
//       },
//       {
//         id: 31,
//         name: "Floral T-shirt",
//         imageUrl: mensImage2,
//         price: 20,
//       },
//       {
//         id: 32,
//         name: "Black & White Longsleeve",
//         imageUrl: mensImage3,
//         price: 25,
//       },
//       {
//         id: 33,
//         name: "Pink T-shirt",
//         imageUrl: mensImage4,
//         price: 25,
//       },
//       {
//         id: 34,
//         name: "Jean Long Sleeve",
//         imageUrl: mensImage5,
//         price: 40,
//       },
//       {
//         id: 35,
//         name: "Burgundy T-shirt",
//         imageUrl: mensImage6,
//         price: 25,
//       },

//       {
//         id: 30,
//         name: "Camo Down Vest",
//         imageUrl: mensImage7,
//         price: 325,
//       },
//       {
//         id: 31,
//         name: "Floral T-shirt",
//         imageUrl: mensImage8,
//         price: 20,
//       },
//       {
//         id: 32,
//         name: "Black & White Longsleeve",
//         imageUrl: mensImage9,
//         price: 25,
//       },
//       {
//         id: 33,
//         name: "Pink T-shirt",
//         imageUrl: mensImage10,
//         price: 25,
//       },
//       {
//         id: 34,
//         name: "Jean Long Sleeve",
//         imageUrl: mensImage11,
//         price: 40,
//       },
//       {
//         id: 35,
//         name: "Burgundy T-shirt",
//         imageUrl: mensImage12,
//         price: 25,
//       },

//       {
//         id: 35,
//         name: "Burgundy T-shirt",
//         imageUrl: mensImage13,
//         price: 25,
//       },
//     ],
//   },
// };

let itemData = {
  womens: {
    id: 1,
    title: "Womens",
    routeName: "womens",
    items: [],
  },

  mens: {
    id: 2,
    title: "Mens",
    routeName: "mens",
    items: [],
  },

  tshirt: {
    id: 3,
    title: "Tshirt",
    routeName: "tshirt",
    items: [],
  },

  jackets: {
    id: 4,
    title: "Jackets",
    routeName: "jackets",
    items: [],
  },

  sneakers: {
    id: 5,
    title: "Sneakers",
    routeName: "sneakers",
    items: [],
  },
};

fetch(urls + "/product")
  .then((res) => res.json())
  .then((datas) => {
    datas.forEach((data) => {
      if (data.category.name === "Tshirt") {
        itemData.tshirt.items.push(data);
      }

      if (data.category.name === "Womens") {
        itemData.womens.items.push(data);
      }

      if (data.category.name === "Mens") {
        itemData.mens.items.push(data);
      }

      if (data.category.name === "Jackets") {
        itemData.jackets.items.push(data);
      }

      if (data.category.name === "Sneakers") {
        itemData.sneakers.items.push(data);
      }
    });
  });

export default itemData;
