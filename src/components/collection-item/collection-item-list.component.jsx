import React, { useState } from "react";
import CollectionsPreview from "./collection-preview.component";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

import SwiperCore, { Autoplay } from "swiper/core";
import LoadingComponent from "../loading/loading.component";
// install Swiper modules
SwiperCore.use([Autoplay]);

const CollectionItemsList = ({ items }) => {
  const [itemOnCart, setItemOnCart] = useState(false);

  if (itemOnCart === true) {
    setTimeout(() => {
      setItemOnCart(false);
    }, 2000);
  }
  return (
    <div className="items-list">
      <div className={`message-pop-up ${itemOnCart !== false ? "active" : ""}`}>
        Item Added To Cart
      </div>
      <Swiper
        spaceBetween={15}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <CollectionsPreview
              key={item.id}
              item={item}
              setItemOnCart={setItemOnCart}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CollectionItemsList;
