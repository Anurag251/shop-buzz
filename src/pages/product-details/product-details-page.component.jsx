import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import $ from "jquery";
import { WhatsappShareButton } from "react-share";
import { urls } from "../../urls";
// import { WhatsappShareCount } from "react-share";

const ProductDetailsPageComponent = () => {
  const { id } = useParams();
  const history = useHistory();

  console.log(history.location);

  const [spcialOffers, setSpcialOffers] = useState([]);

  useEffect(() => {
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
  });

  console.log(spcialOffers);
  return (
    <>
      {spcialOffers[0] !== undefined ? (
        <div className="wrapper">
          {spcialOffers
            .filter((data) => data.id === parseInt(id))
            .map((data, idx) => (
              <div className="product-details-page" id="product-details">
                <div className="images active" id="color1">
                  <div className="image-preview">
                    <img src={data.image} alt="" id="img" />
                  </div>

                  <div className="images-list">
                    <img src={data.image} id="img" className="active" alt="" />

                    {data.productimage.map((image, idx) => (
                      <img key={idx} src={image.image} id="img" alt="" />
                    ))}
                  </div>
                </div>

                <div className="item-details">
                  <h3>{data.name}</h3>
                  <WhatsappShareButton
                    url={`http://localhost:3001/product-details/${id}`}
                    title={`Product Name: ${data.name} | Product Id: ${data.id} | `}
                  >
                    <i className="fas fa-share"></i>
                  </WhatsappShareButton>
                  <div className="rating">
                    <div className="stars" data-value="2"></div>
                  </div>

                  <div className="price">
                    <div className="new">
                      <div id="product-price-text">
                        Rs <span>{data.price}</span>
                        <del>
                          Rs <span>{data.discount}</span>
                        </del>
                      </div>
                    </div>
                  </div>

                  <div className="profuct-desc">
                    <h4>Product Descriptions:</h4>
                    <p>{data.description}</p>
                  </div>

                  <div className="btn-group">
                    <a
                      href={`https://api.whatsapp.com/send?phone=9779817322795&text=Product%20Name:%20${data.name}%20|%20Product%20Id:%20${data.id}%20|%20http://localhost:3001/product-details/${id}`}
                      target="blank"
                      style={{ width: "100%", marginRight: "10px" }}
                    >
                      <button className="button">
                        <i className="fab fa-whatsapp"></i> What's App Us
                      </button>
                    </a>

                    <button className="button">
                      <i className="fas fa-phone-alt"></i> Call Us
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default ProductDetailsPageComponent;
