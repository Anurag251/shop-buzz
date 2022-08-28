import React from 'react';
import Slider from '../../components/slider/slider.component';
import SLIDER_DATA from '../../data/slider-data';
import Directory from '../../components/directory/directory.component';
import SpecialOffer from '../../components/special-offers/special-offer.component';
import SPECIAL_OFFERS from '../../data/special-offers.data';
import FeatureProduct from '../../components/feature-product/feature-product.component';
import FEATURED_DATA from '../../data/feature-product.data';
import Follow from '../../components/follow/follow.component';
import MobileNav from '../../components/mobile-nav/mobile-nav.component';
// import SideMinu from '../../components/side-menu/side-menu.component';

class Homepage extends React.Component {
  constructor() {
    super();

    this.state = {
      slider: SLIDER_DATA,
      specialOffers: SPECIAL_OFFERS,
      featureProduct: FEATURED_DATA,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    // Homepage

    return (
      <div>
        <Slider slider={this.state.slider} />
        <Directory />
        <SpecialOffer spcialOffers={this.state.specialOffers} />
        <FeatureProduct featureProduct={this.state.featureProduct} />
        <Follow />

        {/* <SideMinu /> */}
        <MobileNav />
      </div>
    );
  }
}

export default Homepage;
