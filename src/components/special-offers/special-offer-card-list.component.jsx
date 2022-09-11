import React, { useEffect, useState } from "react";
import SpecialOfferCard from "./special-offer-card.component";
import { ReactComponent as CartIcon } from "../../assets/Buy.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

import SwiperCore, { Autoplay } from "swiper/core";
import { Link, useHistory } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component";
// install Swiper modules
SwiperCore.use([Autoplay]);

const SpecialOfferCardList = (props) => {
  const history = useHistory();
  const [test, setTest] = useState(false);

  const width = window.innerWidth;

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
                style={{ backgroundImage: `url(${specialOffer.image})` }}
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
      <>
        <div className="special-offers-card-list">
          {props.spcialOffers
            .filter((specialOffer, idx) => specialOffer.type === "Offer")
            .filter((specialOffer, idx) =>
              history.location.pathname === "/" ? idx < 8 : idx + 1
            )
            .map((specialOffer, idx) => (
              <SpecialOfferCard key={specialOffer.id} item={specialOffer} />
            ))}
        </div>

        {history.location.pathname === "/" ? (
          <div className="button-area">
            <Link to="/new-collections">
              <CustomButton>View All</CustomButton>
            </Link>
          </div>
        ) : null}
      </>
    );
  }
};

export default SpecialOfferCardList;
