import React, { useEffect, useState } from "react";
import SpecialOfferCard from "./special-offer-card.component";
import { ReactComponent as CartIcon } from "../../assets/Buy.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

import SwiperCore, { Autoplay } from "swiper/core";
import { Link, useHistory } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
// install Swiper modules
SwiperCore.use([Autoplay]);

const SpecialOfferCardList = ({ spcialOffers, addItem }) => {
  const history = useHistory();
  const [test, setTest] = useState(false);

  const [itemOnCart, setItemOnCart] = useState(false);

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

  //Mob
  if (test) {
    if (history.location.pathname === "/new-collections") {
      return (
        <div className="special-offers-card">
          <div
            className={`message-pop-up ${itemOnCart !== false ? "active" : ""}`}
          >
            Item Added To Cart
          </div>
          <div className="list-items">
            {spcialOffers.map((specialOffer) => {
              return (
                <div className="item" key={specialOffer.id}>
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
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
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
    }
  }
  // Desktop
  else {
    return (
      <React.Fragment>
        <div className="special-offers-card-list">
          {spcialOffers
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
      </React.Fragment>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(SpecialOfferCardList);
