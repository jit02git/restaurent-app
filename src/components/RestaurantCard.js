import React from "react";
import {CDN_URL} from '../utils/constants'

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;

    console.log("hey this is image url",CDN_URL+cloudinaryImageId);
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL+cloudinaryImageId}
        alt=""
      />
      <div className="food-bar">
        <h3>{name}</h3>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{avgRating} stars</h3>
        <h3>{costForTwo}</h3>
        <h3>{sla.slaString} minutes</h3>
      </div>
    </div>
  );
};

export default RestaurantCard;
