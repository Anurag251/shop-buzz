import React from 'react';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import arrow from '../../assets/arrow.svg';
import homeIcon from '../../assets/home.svg';
import dress from '../../assets/dress.svg';
import shop from '../../assets/shop.svg';
import newItem from '../../assets/new.svg';
import shirt from '../../assets/shirt.svg';
import contact from '../../assets/contact.svg';
import close from '../../assets/close.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrenetUser } from '../../redux/user/user.selectors';

const MobileNav = ({ hidden }) => {
  return (
    <>
      <div className="mobile-nav">
        {hidden ? null : <CartDropdown />}
        <div className="cart-icons">
          <CartIcon />
        </div>
        <div className="nav-bg">
          <i className="fas fa-search"></i>
          <div className="bars" id="bars">
            <div className="bars-line"></div>
            <div className="bars-line"></div>
            <div className="bars-line"></div>
          </div>
        </div>
      </div>

      <div className="side-menu ">
        <div
          className="close-btn"
          style={{ backgroundImage: `url(${close})` }}
        ></div>
        <div className="wrapper">
          <div className="profile">
            <div
              className="image"
              style={{
                backgroundImage:
                  'url(https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
              }}
            ></div>
          </div>
          <h4>Please Sign In</h4>
          <div className="group">
            <div className="button">Sign Up</div>
            <div className="button">Login</div>
          </div>

          <ul className="nav-list">
            <li className="drop">
              <div className="li">
                <div className="grab">
                  <div
                    className="icon"
                    style={{ backgroundImage: `url(${homeIcon})` }}
                  />
                  Home
                </div>
                <div
                  className="arrow"
                  style={{ backgroundImage: `url(${arrow})` }}
                />
              </div>
              <ul className="nav-drop">
                <li className="">Home</li>
                <li className="">Home</li>
                <li className="">Home</li>
              </ul>
            </li>

            <li className="drop">
              <div className="li">
                <div className="grab">
                  <div
                    className="icon"
                    style={{ backgroundImage: `url(${newItem})` }}
                  />
                  What's New
                </div>
                <div
                  className="arrow"
                  style={{ backgroundImage: `url(${arrow})` }}
                />
              </div>
              <ul className="nav-drop">
                <li className="">Home</li>
                <li className="">Home</li>
                <li className="">Home</li>
              </ul>
            </li>

            <li>
              <div className="li">
                <div className="grab">
                  <div
                    className="icon"
                    style={{ backgroundImage: `url(${shop})` }}
                  />
                  Shop
                </div>
                <div
                  className="arrow"
                  style={{ backgroundImage: `url(${arrow})` }}
                />
              </div>
            </li>

            <li>
              <div className="li">
                <div className="grab">
                  <div
                    className="icon"
                    style={{ backgroundImage: `url(${dress})` }}
                  />
                  Women's
                </div>
                <div
                  className="arrow"
                  style={{ backgroundImage: `url(${arrow})` }}
                />
              </div>
            </li>

            <li>
              <div className="li">
                <div className="grab">
                  <div
                    className="icon"
                    style={{ backgroundImage: `url(${shirt})` }}
                  />
                  Men's
                </div>
                <div
                  className="arrow"
                  style={{ backgroundImage: `url(${arrow})` }}
                />
              </div>
            </li>

            <li>
              <div className="li">
                <div className="grab">
                  <div
                    className="icon"
                    style={{ backgroundImage: `url(${contact})` }}
                  />
                  Contact Us
                </div>
                <div
                  className="arrow"
                  style={{ backgroundImage: `url(${arrow})` }}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

window.onload = () => {
  const bars = document.querySelector('#bars');
  const sideMenu = document.querySelector('.side-menu');
  const closeBtn = document.querySelector('.close-btn');

  if (bars !== undefined && bars !== null) {
    bars.addEventListener('click', () => {
      bars.classList.toggle('close');
      sideMenu.classList.toggle('show');
    });

    closeBtn.addEventListener('click', () => {
      bars.classList.remove('close');
      sideMenu.classList.remove('show');
    });
  }

  const arrow = document.querySelector('.arrow');
  const drop = document.querySelectorAll('.drop');
  const navDrop = document.querySelectorAll('.nav-drop');

  drop.forEach((drop, index) => {
    drop.addEventListener('click', () => {
      navDrop[index].classList.toggle('show-drop');
      arrow.classList.toggle('rotate');
    });
  });
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrenetUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(MobileNav);
