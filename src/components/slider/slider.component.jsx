import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";
import '../../styles/styles.sass';
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.min.css";
// import Swiper core and required modules
import SwiperCore, { Autoplay } from "swiper/core";
// install Swiper modules
SwiperCore.use([Autoplay]);

const Slider = ({ slider, addItem }) => {
  return (
    <Swiper
      grabCursor={true}
      pagination={{
        dynamicBullets: true,
      }}
      spaceBetween={0}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      {slider.map((item) => {
        const { id, type, name, price, imageUrl } = item;
        return (
          <SwiperSlide key={id}>
            <div className="slider">
              <div className="container">
                <div className="wrapper">
                  <div className="content">
                    <h6>Type: {type}</h6>
                    <h3>{name.toUpperCase()}</h3>
                    <h4>Price: Rs {price}/-</h4>
                    <div className="custom-button">View</div>
                    <div className="custom-btn" onClick={() => addItem(item)}>
                      Add To Cart
                    </div>
                  </div>
                </div>
                <div className="wrappers ">
                  <div className="image-bg">
                    <div
                      className="slider-image"
                      style={{ backgroundImage: `url(${imageUrl})` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(Slider);
