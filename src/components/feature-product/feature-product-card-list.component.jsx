import React from 'react';
import FeatureProductCard from './feature-product-card.component';
import { ReactComponent as CartIcon } from '../../assets/Buy.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

import SwiperCore, { Autoplay } from 'swiper/core';
// install Swiper modules
SwiperCore.use([Autoplay]);

const FeatureProductCardList = (props) => {
  const width = window.innerWidth;
  //Mob
  if (width <= 760) {
    return (
      <Swiper
        spaceBetween={15}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {props.featureProduct.map((featureProduct) => (
          <SwiperSlide key={featureProduct.id}>
            <div className="card">
              <div className="for-image">
                <div
                  className="image"
                  style={{ backgroundImage: `url(${featureProduct.imageURL})` }}
                ></div>
                <div className="explore">Shop Now</div>
              </div>
              <div className="content">
                <div className="shopping-cart">
                  <CartIcon />
                </div>
                <h4>{featureProduct.title}</h4>
                <h6>{featureProduct.price}</h6>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
  // Desktop
  else {
    return (
      <div className="card-list">
        {props.featureProduct.map((featureProductItem) => (
          <FeatureProductCard
            featureProduct={featureProductItem}
            key={featureProductItem.id}
          />
        ))}
      </div>
    );
  }
};
export default FeatureProductCardList;
