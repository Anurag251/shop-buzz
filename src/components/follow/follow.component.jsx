import React from 'react';

const Follow = () => {
  return (
    <div
      className="follow"
      style={{
        backgroundImage:
          'url(https://cdn11.bigcommerce.com/s-9srn18to/content/img/homepage/MAGNETIC-NEVERLAND_V2-L-1.jpg)',
      }}
    >
      <div className="content">
        <div>
          <h2>Follow Us On Social Medias</h2>
          <div className="social-icon">
            <i className="fab fa-facebook" style={{ color: ' #3b5998' }}></i>
            <i
              className="fab fa-snapchat-ghost"
              style={{ color: '#FFFC00' }}
            ></i>
            <i className="fab fa-twitter" style={{ color: '#00acee' }}></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Follow;
