import React, { useState } from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";
import "../../styles/styles.sass";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.min.css";
// import Swiper core and required modules
import SwiperCore, { Autoplay } from "swiper/core";
import { Link } from "react-router-dom";
// install Swiper modules
SwiperCore.use([Autoplay]);

const Slider = ({ slider, addItem }) => {
  const [itemOnCart, setItemOnCart] = useState(false);

  if (itemOnCart === true) {
    setTimeout(() => {
      setItemOnCart(false);
    }, 2000);
  }

  return (
    <React.Fragment>
      <div className={`message-pop-up ${itemOnCart !== false ? "active" : ""}`}>
        Item Added To Cart
      </div>
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
          const { id, type, name, price, image } = item;
          return (
            <React.Fragment key={id}>
              {item.tag === "Sale" ? (
                <SwiperSlide key={id}>
                  <div className="slider">
                    <div className="container">
                      <div className="wrapper">
                        <div className="content">
                          <h6>Type: {type}</h6>
                          <h3>{name.toUpperCase()}</h3>
                          <h4>Price: Rs {price}/-</h4>
                          <Link to={`product-details/${id}`}>
                            <div className="custom-button">View</div>
                          </Link>

                          <div
                            className="custom-btn"
                            onClick={() => {
                              addItem(item);
                              setItemOnCart(true);
                            }}
                          >
                            Add To Cart
                          </div>
                        </div>
                      </div>

                      <div className="wrappers">
                        <div className="image-bg">
                          <div
                            className="slider-image"
                            style={{ backgroundImage: `url(${image})` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ) : null}
            </React.Fragment>
          );
        })}
      </Swiper>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(Slider);
