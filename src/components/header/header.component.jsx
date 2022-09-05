import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrenetUser } from "../../redux/user/user.selectors";
import { ReactComponent as Logo } from "../../assets/logo/Sprezzatura logo.svg";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, hidden }) => {
  useEffect(() => {
    const vSearchBtn = document.querySelector(".v-search-btn");
    const vSearchField = document.querySelector("#v-search-field");
    const vSearchInput = document.querySelector("#v-search-input");
    const vSearchClose = document.querySelector("#fa-times");

    vSearchBtn.addEventListener("click", () => {
      vSearchField.classList.toggle("active");
      vSearchInput.focus();
    });
  }, []);

  return (
    <React.Fragment>
      <div className="v-header">
        <div className="wrapper">
          <div className="logo-section">
            <NavLink to="/" exact>
              <div className="logo rectangle-shape">
                <div className="image">
                  <Logo />
                </div>
              </div>
            </NavLink>

            <ul>
              <li>
                <NavLink to="/" exact activeClassName="active">
                  <button>Home</button>
                </NavLink>
              </li>

              {/* <li className="drop-down">
                <button>
                  Shop <i className="fas fa-chevron-down"></i>
                </button>
                <ul className="drop">
                  <li>
                    <NavLink to="/">
                      <button>Clothing</button>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/">
                      <button>Electronic</button>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/">
                      <button>Sneakers</button>
                    </NavLink>
                  </li>
                </ul>
              </li> */}

              <li>
                <NavLink to="/shop">
                  <button>Shop</button>
                </NavLink>
              </li>

              <li>
                <NavLink to="/mens">
                  <button>Mens</button>
                </NavLink>
              </li>

              <li>
                <NavLink to="/womens">
                  <button>Womens</button>
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="others">
            <div className="v-search-section" id="v-search-field">
              <div className="inner">
                <button className="v-search-btn">
                  <div className="icon-group">
                    <i className="fas fa-search"></i>
                    <i className="fas fa-times"></i>
                  </div>
                </button>

                <form action="">
                  <input
                    type="text"
                    placeholder="Search..."
                    id="v-search-input"
                  />
                  <button>
                    <i className="fas fa-search"></i>
                  </button>
                </form>
              </div>
            </div>

            <div className="sign-cart">
              {hidden ? null : <CartDropdown />}

              <div className="login">
                {currentUser ? (
                  <div onClick={() => auth.signOut()}>SIGN OUT</div>
                ) : (
                  <Link to="/signIn">
                    <i className="fas fa-user"></i> LOGIN
                  </Link>
                )}
              </div>

              <div className="cart">
                <CartIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrenetUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);

// 14. Add To Cart Styling
