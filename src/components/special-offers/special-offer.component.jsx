import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { urls } from "../../urls";
import LoadingComponent from "../loading/loading.component";
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

  return (
    <div className="special-offers">
      {history.location.pathname !== "/" ? (
        <div className="search-area" style={{ marginTop: "1rem" }}>
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
        <LoadingComponent />
      )}
    </div>
  );
};

export default SpecialOffer;
