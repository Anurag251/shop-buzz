import React, { useEffect, useState } from "react";
import { ReactComponent as CartIcon } from "../../assets/Buy.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

import SwiperCore, { Autoplay } from "swiper/core";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/custom-button.component";

// install Swiper modules
SwiperCore.use([Autoplay]);

const YouMayAlsoLikeComponent = ({ spcialOffers, addItem }) => {
  const history = useHistory();
  const [itemOnCart, setItemOnCart] = useState(false);
  const [test, setTest] = useState(false);

  if (itemOnCart === true) {
    setTimeout(() => {
      setItemOnCart(false);
    }, 2000);
  }

  const width = window.innerWidth;

  useEffect(() => {
    if (width <= 760) {
      setTest(true);
    }
  }, [width]);
  if (test) {
    return (
      <div className="special-offers-card">
        <div
          className={`message-pop-up ${itemOnCart !== false ? "active" : ""}`}
        >
          Item Added To Cart
        </div>
        <Swiper
          spaceBetween={15}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 3,
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
          {spcialOffers.map((specialOffer) => {
            return (
              <SwiperSlide key={specialOffer.id}>
                <div
                  className="image"
                  style={{ backgroundImage: `url(${specialOffer.image})` }}
                >
                  <div className="ribbon">
                    <div className="tag">{specialOffer.tag}</div>
                  </div>
                  <div className="content">
                    <div
                      className="shopping-cart"
                      onClick={() => {
                        addItem(specialOffer);
                        setItemOnCart(true);
                      }}
                    >
                      <CartIcon />
                    </div>
                    <h4>{specialOffer.name}</h4>
                    <h6>
                      NRs: {specialOffer.price} /-
                      <del>{specialOffer.discount}</del>
                    </h6>

                    <Link to={`product-details/${specialOffer.id}`}>
                      <div className="button">Quick View</div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    );
  } else {
    return (
      <div className="you-may-also-like" style={{ marginBottom: "4rem" }}>
        <div
          className={`message-pop-up ${itemOnCart !== false ? "active" : ""}`}
        >
          Item Added To Cart
        </div>
        <Swiper
          spaceBetween={15}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 3,
              spaceBetween: 10,
            },

            "@0.75": {
              slidesPerView: 3,
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
          {spcialOffers.map((specialOffer) => {
            return (
              <SwiperSlide key={specialOffer.id}>
                <div className="special-offers-card">
                  <div
                    className={`message-pop-up ${
                      itemOnCart !== false ? "active" : ""
                    }`}
                  >
                    Item Added To Cart
                  </div>
                  <div
                    className="image"
                    style={{ backgroundImage: `url(${specialOffer.image})` }}
                  >
                    <div className={`${specialOffer.tag ? "ribbon" : ""}`}>
                      <div className={`tag ${specialOffer.tag}`}>
                        {specialOffer.tag}
                      </div>
                    </div>
                    <div className="quick-view">
                      <i className="fas fa-search"></i>
                    </div>
                    <CustomButton
                      onClick={() => {
                        addItem(specialOffer);
                        setItemOnCart(true);
                      }}
                    >
                      Add To Cart
                    </CustomButton>
                  </div>
                  <div className="content">
                    <Link to={`product-details/${specialOffer.id}`}>
                      <h4>{specialOffer.name}</h4>
                    </Link>
                    <del>Rs: {specialOffer.discount}</del>
                    <h6>Rs: {specialOffer.price} /- </h6>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(YouMayAlsoLikeComponent);
