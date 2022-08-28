import React from 'react';

// import Swiper core and required modules

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        backgroundImage:
          'url(https://cdn.shopify.com/s/files/1/1132/3440/t/4/assets/homepage_lower_image.jpg?v=3909155130083909617)',
      }}
    >
      <div className="content-list">
        <div className="content">
          <h4>Contact</h4>
          <h6>Email: abcd@gmail.com</h6>
          <h6>Phone No: 9876543210</h6>
          <h6>Location: Koteswor, Kathmandu</h6>
        </div>

        <div className="content">
          <h4>Contact</h4>
          <h6>www.castelclothing.com</h6>
          <h6>www.facebook.com</h6>
          <h6>www.twitter.com</h6>
        </div>

        <div className="slide-image">
          <Swiper
            className="my-swipers"
            spaceBetween={0}
            slidesPerView={1}
            navigation={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide
              className="slide"
              style={{
                backgroundImage:
                  'url(https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
              }}
            ></SwiperSlide>
            <SwiperSlide
              className="slide"
              style={{
                backgroundImage:
                  'url(https://images.pexels.com/photos/3419648/pexels-photo-3419648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)',
              }}
            ></SwiperSlide>
            <SwiperSlide
              className="slide"
              style={{
                backgroundImage:
                  'url(https://images.pexels.com/photos/318236/pexels-photo-318236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
              }}
            ></SwiperSlide>
            <SwiperSlide
              className="slide"
              style={{
                backgroundImage:
                  'url(https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
              }}
            ></SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="copy-right">Copyright © 2021 by Castel Clothing</div>
    </div>
  );
};

export default Footer;
