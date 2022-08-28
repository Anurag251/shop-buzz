import React from 'react';
import SpecialOfferCard from './special-offer-card.component';
import { ReactComponent as CartIcon } from '../../assets/Buy.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

import SwiperCore, { Autoplay } from 'swiper/core';
// install Swiper modules
SwiperCore.use([Autoplay]);

const SpecialOfferCardList = (props) => {
  const width = window.innerWidth;
  //Mob
  if (width <= 760) {
    return (
      <div className="special-offers-card">
        <Swiper
          spaceBetween={15}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {props.spcialOffers.map((specialOffer) => (
            <SwiperSlide key={specialOffer.id}>
              <div
                className="image"
                style={{ backgroundImage: `url(${specialOffer.imageUrl})` }}
              >
                <div className="ribbon">
                  <div className="tag">{specialOffer.tag}</div>
                </div>
                <div className="content">
                  <div className="shopping-cart">
                    <CartIcon />
                  </div>
                  <h4>{specialOffer.name}</h4>
                  <h6>
                    NRs: {specialOffer.price} /-
                    <del>NRs: {specialOffer.mainPrice}</del>
                  </h6>

                  <div className="button">Quick View</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
  // Desktop
  else {
    return (
      <div className="special-offers-card-list">
        {props.spcialOffers.map((specialOffer) => (
          <SpecialOfferCard key={specialOffer.id} item={specialOffer} />
        ))}
      </div>
    );
  }
};

export default SpecialOfferCardList;
