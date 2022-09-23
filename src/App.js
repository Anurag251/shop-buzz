import React from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrenetUser } from "./redux/user/user.selectors";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Homepage from "./pages/homepage/homepage.component";
import WomensPage from "./pages/womens-page/womens-page.component";
import MensPage from "./pages/mens-page/mens-page.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import ProductDetailsPageComponent from "./pages/product-details/product-details-page.component";
import MobileNavComponent from "./components/mobile-nav/mobile-nav.component";
import { ReactComponent as Logo } from "./assets/logo/Sprezzatura logo.svg";
import { LogoIcon } from "./components/icons/icons.component";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className={`${window.innerWidth <= 768 ? "mob" : "desktop"}`}>
        {window.innerWidth <= 768 ? (
          <React.Fragment>
            <div className="top-header">
              <div className="logo">
                <Link to="/">
                  <LogoIcon />
                </Link>
              </div>
            </div>
            <MobileNavComponent />
          </React.Fragment>
        ) : (
          <Header />
        )}

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/new-collections" component={WomensPage} />
          <Route path="/special-offers" component={MensPage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/product-details/:id"
            component={ProductDetailsPageComponent}
          />
          <Route
            exact
            path="/signIn"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrenetUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
