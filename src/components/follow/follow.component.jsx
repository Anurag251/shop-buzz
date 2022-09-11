import React from "react";

const Follow = () => {
  return (
    <div
      className="follow"
      style={{
        backgroundImage:
          "url(https://cdn11.bigcommerce.com/s-9srn18to/content/img/homepage/MAGNETIC-NEVERLAND_V2-L-1.jpg)",
      }}
    >
      <div className="content">
        <div>
          <h2>Follow Us On Social Medias</h2>
          <div className="social-icon">
            <a href="https://www.instagram.com/sprez_nep/" target="blank">
              <i className="fab fa-facebook" style={{ color: " #3b5998" }}></i>
            </a>

            <a href="https://www.tiktok.com/@sprez.nep" target="blank">
              <i className="fab fa-tiktok" style={{ color: "#000000" }}></i>
            </a>

            <a href="https://www.instagram.com/sprez_nep/" target="blank">
              <i className="fab fa-instagram"></i>
            </a>

            <a href="https://www.instagram.com/sprez_nep/" target="blank">
              <i className="fab fa-twitter" style={{ color: "#00acee" }}></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Follow;
