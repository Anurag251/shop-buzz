import React, { useEffect, useState } from "react";
import SpecialOfferCard from "./special-offer-card.component";
import { ReactComponent as CartIcon } from "../../assets/Buy.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

import SwiperCore, { Autoplay } from "swiper/core";
// install Swiper modules
SwiperCore.use([Autoplay]);

const SpecialOfferCardList = (props) => {
  const [test, setTest] = useState(false);

  const width = window.innerWidth;
  let headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");

  headers.append("Access-Control-Allow-Origin", "http://localhost:3001");
  headers.append("Access-Control-Allow-Credentials", "true");

  headers.append("GET", "POST", "OPTIONS");

  useEffect(() => {
    fetch("http://192.168.10.66:8000/category/", {
      method: "GET",
      headers: headers,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  // const hello = async () => {
  //   const response = await fetch("http://192.168.10.66:8000/categorys");
  //   const json = response.json();

  //   console.log(json);
  // };

  useEffect(() => {
    if (width <= 760) {
      setTest(true);
    }
  }, [width]);
  //Mob
  if (test) {
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
        {props.spcialOffers.map((specialOffer, idx) => (
          <SpecialOfferCard
            key={specialOffer.id * idx + 1}
            item={specialOffer}
          />
        ))}
      </div>
    );
  }
};

export default SpecialOfferCardList;
