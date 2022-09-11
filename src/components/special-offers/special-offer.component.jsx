import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { urls } from "../../urls";
import SpecialOfferCardList from "./special-offer-card-list.component";

const SpecialOffer = () => {
  const [spcialOffers, setSpcialOffers] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  const history = useHistory();

  useEffect(() => {
    fetch(urls + "product/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setSpcialOffers(data));
  }, []);

  const filteredData = spcialOffers.filter((data) =>
    data.name.toLowerCase().includes(searchFilter.toLowerCase())
  );

  console.log(filteredData);

  return (
    <div className="special-offers">
      {history.location.pathname !== "/" ? (
        <div className="search-area">
          <input
            className="search-filter"
            type="search"
            placeholder="Search..."
            onChange={(e) => setSearchFilter(e.target.value)}
          />
        </div>
      ) : null}

      <div className="title">Special Offers</div>

      {spcialOffers[0] !== undefined ? (
        <SpecialOfferCardList spcialOffers={filteredData} />
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default SpecialOffer;
