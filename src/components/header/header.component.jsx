import React from "react";
import { NavLink, Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrenetUser } from "../../redux/user/user.selectors";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, hidden }) => {
  //   const [width, setWidth] = useState(0);

  //   window.addEventListener('resize', (e) => {
  //     setWidth(e.currentTarget.innerWidth);
  //   });

  //   if (width) {
  //   }

  //   Content();
  //   return <Content />;
  // };

  // const Content = () => {
  //   window.addEventListener('resize', (e) => contentToLoad(e));

  //   const contentToLoad = (e) => {
  //     let width, type;
  //     e === undefined
  //       ? (width = window.innerWidth)
  //       : (width = e.currentTarget.innerWidth);
  //     width <= 760 ? (type = 'mob') : (type = 'desktop');

  //     if (type === 'desktop') {
  return (
    <>
      <div className="header">
        <div className="top">
          <form className="search">
            <input type="text" placeholder={"Search...".toUpperCase()} />
            <div className="search-btn">
              <i className="fas fa-search"></i>
            </div>
          </form>
          <div className="for-logo">
            <Logo className="logo" />
          </div>
          <div className="sign-cart ">
            {hidden ? null : <CartDropdown />}
            {/* <div className="sign-in">
              <i className="fas fa-user"></i> SIGN UP
            </div> */}
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
      <div className="nav-bar">
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/new">What's New</NavLink>
          </li> */}
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/mens">Mens</NavLink>
          </li>
          <li>
            <NavLink to="/womens">Womens</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
  // } else {
  //   return null;
  // }
  // };

  // return contentToLoad();
};

// let ty = document.querySelector('.nav-bar');

// {`${(window.onload = () =>
//   (window.onscroll = () =>
//     window.scrollY > 250
//       ? ty.classList.add('sticky')
//       : ty.classList.remove('sticky')))} nav-bar`}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrenetUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);

// 14. Add To Cart Styling
