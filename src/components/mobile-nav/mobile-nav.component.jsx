import React from "react";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import arrow from "../../assets/arrow.svg";
import homeIcon from "../../assets/home.svg";
import dress from "../../assets/dress.svg";
import shop from "../../assets/shop.svg";
import newItem from "../../assets/new.svg";
import shirt from "../../assets/shirt.svg";
import contact from "../../assets/contact.svg";
import close from "../../assets/close.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrenetUser } from "../../redux/user/user.selectors";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import { ReactComponent as Logo } from "../../assets/logo/Sprezzatura logo.svg";

const MobileNav = ({ hidden }) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const bars = document.querySelector("#bars");
    const sideMenu = document.querySelector(".side-menu");
    const closeBtn = document.querySelector(".close-btn");

    if (clicked === true) {
      bars.classList.remove("close");
      sideMenu.classList.remove("show");
    }

    if (bars !== undefined && bars !== null) {
      bars.addEventListener("click", () => {
        bars.classList.toggle("close");
        sideMenu.classList.toggle("show");
        setClicked(false);
      });

      closeBtn.addEventListener("click", () => {
        bars.classList.remove("close");
        sideMenu.classList.remove("show");
      });
    }

    const arrow = document.querySelector(".arrow");
    const drop = document.querySelectorAll(".drop");
    const navDrop = document.querySelectorAll(".nav-drop");

    drop.forEach((drop, index) => {
      drop.addEventListener("click", () => {
        navDrop[index].classList.toggle("show-drop");
        arrow.classList.toggle("rotate");
      });
    });
  }, [clicked]);

  return (
    <React.Fragment>
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

      <div className="side-menu">
        <div
          className="close-btn"
          style={{ backgroundImage: `url(${close})` }}
        ></div>
        <div className="wrapper">
          {/* <div className="profile">
            <div
              className="image"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
              }}
            ></div>
          </div>
          <h4>Please Sign In</h4>
          <div className="group">
            <div className="button">Sign Up</div>
            <div className="button">Login</div>
          </div> */}

          <div className="logo">
            <Logo />
          </div>

          <ul className="nav-list">
            <li className="drop" onClick={() => setClicked(true)}>
              <div className="li">
                <Link to="/">
                  <div className="grab">
                    <div
                      className="icon"
                      style={{ backgroundImage: `url(${homeIcon})` }}
                    />
                    Home
                  </div>
                </Link>

                {/* <div
                  className="arrow"
                  style={{ backgroundImage: `url(${arrow})` }}
                /> */}
              </div>
              {/* <ul className="nav-drop">
                <li className="">Home</li>
                <li className="">Home</li>
                <li className="">Home</li>
              </ul> */}
            </li>

            <li className="drop" onClick={() => setClicked(true)}>
              <div className="li">
                <Link to="/shop">
                  <div className="grab">
                    <div
                      className="icon"
                      style={{ backgroundImage: `url(${shop})` }}
                    />
                    Shop
                  </div>
                </Link>

                {/* <div
                  className="arrow"
                  style={{ backgroundImage: `url(${arrow})` }}
                /> */}
              </div>
              {/* <ul className="nav-drop">
                <li className="">Home</li>
                <li className="">Home</li>
                <li className="">Home</li>
              </ul> */}
            </li>

            <li onClick={() => setClicked(true)}>
              <div className="li">
                <Link to="/new-collections">
                  <div className="grab">
                    <div
                      className="icon"
                      style={{ backgroundImage: `url(${newItem})` }}
                    />
                    New Collections
                  </div>
                </Link>

                {/* <div
                  className="arrow"
                  style={{ backgroundImage: `url(${arrow})` }}
                /> */}
              </div>
            </li>

            {/* <li>
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
            </li> */}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrenetUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(MobileNav);
