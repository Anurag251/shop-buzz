import React from "react";
import { withRouter } from "react-router-dom";

const MenuItem = ({ name, image, size, history, link, match }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${link}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <div className="content">
        <h1>{name.toUpperCase()}</h1>
      </div>
    </div>
  );
};
export default withRouter(MenuItem);
