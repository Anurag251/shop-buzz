import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import $ from "jquery";
import { WhatsappShareButton } from "react-share";
import { url, urls } from "../../urls";
import LoadingComponent from "../../components/loading/loading.component";

import { addItem } from "../../redux/cart/cart.actions";
import CustomButton from "../../components/custom-button/custom-button.component";
import FormInput from "../../components/form-input/form-input.component";

const ProductDetailsPageComponent = ({ addItem }) => {
  const [formValue, setFormValue] = useState({
    fullName: "",
    contactNumber: "",
    address: "",
  });
  const [spcialOffers, setSpcialOffers] = useState([]);
  const [itemOnCart, setItemOnCart] = useState(false);

  const { id } = useParams();
  const history = useHistory();

  if (itemOnCart === true) {
    setTimeout(() => {
      setItemOnCart(false);
    }, 2000);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(urls + "product/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setSpcialOffers(data));
  }, []);

  useEffect(() => {
    // image-preview
    const colorImageSet = document.querySelectorAll(".image-preview img");
    const otherColorImages = document.querySelectorAll(".images-list");
    otherColorImages.forEach((colorImg, idx) => {
      let colorImgs = colorImg.querySelectorAll("img");

      colorImgs.forEach((img) => {
        $(img).click((e) => {
          let imgUrl = e.target.getAttribute("src");
          colorImageSet[idx].setAttribute("src", imgUrl);
          $(img).addClass("active").siblings().removeClass("active");
        });
      });
    });

    if (spcialOffers[0] !== undefined) {
      const clickMe = document.querySelector("#clickMe");
      const forceToClick = document.querySelector("#forceToClick");
      const shippingAddressPopup = document.querySelector(
        ".shipping-address-popup"
      );
      const shippingPopoupBtn = document.querySelector("#shippingPopoupBtn");
      const closeButton = document.querySelector(".close-button");

      clickMe.addEventListener("click", () => {
        forceToClick.click();
      });

      shippingPopoupBtn.addEventListener("click", () => {
        shippingAddressPopup.classList.add("active");
      });

      closeButton.addEventListener("click", () => {
        shippingAddressPopup.classList.remove("active");
      });
    }
  });

  const handelChange = (event) => {
    const { value, name } = event.target;

    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <React.Fragment>
      <div className={`message-pop-up ${itemOnCart !== false ? "active" : ""}`}>
        Item Added To Cart
      </div>
      <div className="shipping-address-popup">
        <h3>Shipping Information</h3>

        <div className="close-button">
          <i className="fas fa-times"></i>
        </div>
        <div className="form-area">
          <FormInput
            name="fullName"
            type="text"
            handleChange={handelChange}
            value={formValue.fullName}
            lable="Full Name"
            required
          />

          <FormInput
            name="contactNumber"
            type="number"
            handleChange={handelChange}
            value={formValue.contactNumber}
            lable="Contact Number"
            required
          />

          <FormInput
            name="address"
            type="text"
            handleChange={handelChange}
            value={formValue.address}
            lable="Address"
            required
          />

          <CustomButton
            style={{ padding: ".4rem 1rem", fontSize: "14px" }}
            id="clickMe"
          >
            Submit
          </CustomButton>
        </div>
      </div>
      {spcialOffers[0] !== undefined ? (
        <div className="wrapper">
          {spcialOffers
            .filter((item) => item.id === parseInt(id))
            .map((item, idx) => (
              <div
                key={idx}
                className="product-details-page"
                id="product-details"
              >
                <div className="images active" id="color1">
                  <div className="image-preview">
                    <img src={item.image} alt="" id="img" />
                  </div>

                  <div className="images-list">
                    <img src={item.image} id="img" className="active" alt="" />

                    {item.productimage.map((image, idx) => (
                      <img key={idx} src={image.image} id="img" alt="" />
                    ))}
                  </div>
                </div>

                <div className="item-details">
                  <h3>{item.name}</h3>
                  <WhatsappShareButton
                    url={`http://localhost:3001/product-details/${id}`}
                    title={`Product Name: ${item.name} | Product Id: ${item.id} | `}
                  >
                    <i className="fas fa-share"></i> Share This Product
                  </WhatsappShareButton>
                  <div className="rating">
                    <div className="stars" data-value="2"></div>
                  </div>

                  <div className="price">
                    <div className="new">
                      <div id="product-price-text">
                        Rs <span>{item.price}</span>
                        <del>
                          Rs <span>{item.discount}</span>
                        </del>
                      </div>
                    </div>
                  </div>

                  <div className="profuct-desc">
                    <h4>Product Descriptions:</h4>
                    <p>{item.description}</p>
                  </div>

                  <div className="btn-group">
                    <button className="button" id="shippingPopoupBtn">
                      <i className="fab fa-whatsapp"></i> What's App Us
                    </button>

                    <a
                      href={`https://api.whatsapp.com/send?phone=9779817322795&text=Product%20Image:%20${item.image}%20|%20Product%20Name:%20${item.name}%20|%20Product%20Price:%20${item.price}%20|%20User%20Name:%20${formValue.fullName}%20|%20User%20Contact:%20${formValue.contactNumber}%20|%20User%20Address:%20${formValue.address}`}
                      target="blank"
                      style={{ display: "none" }}
                      id="forceToClick"
                    >
                      a
                    </a>

                    <a
                      href="tel:+9779817322795"
                      target="blank"
                      style={{ width: "100%", marginRight: "10px" }}
                    >
                      <button className="button">
                        <i className="fas fa-phone-alt"></i> Call Us
                      </button>
                    </a>

                    <button
                      onClick={() => {
                        addItem(item);
                        setItemOnCart(true);
                      }}
                      className="button"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <LoadingComponent />
      )}
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ProductDetailsPageComponent);
