import React from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/MockData";
import { useState } from "react";

const Body = () => {
    // let getResData = [
    //     {
    //       info: {
    //         id: "136632",
    //         name: "Daminic Pizza",
    //         cloudinaryImageId: "oo2ecoq14tcingci5d37",
    //         locality: "Sector 19",
    //         areaName: "Sector 19",
    //         costForTwo: "₹250 for two",
    //         cuisines: ["Pizzas", "Fast Food", "Pastas", "Beverages", "Desserts"],
    //         avgRating: 4.1,
    //         parentId: "488980",
    //         avgRatingString: "4.1",
    //         totalRatingsString: "10K+",
    //         sla: {
    //           deliveryTime: 23,
    //           lastMileTravel: 0.8,
    //           serviceability: "SERVICEABLE",
    //           slaString: "20-25 mins",
    //           lastMileTravelString: "0.8 km",
    //           iconType: "ICON_TYPE_EMPTY",
    //         },       
    //       },
    //     },
    // ]
    const [restaurantList, setRestaurantList] = useState(resList)
  return (
    <div className="body">
      <div>
        <button className="gb gb-bordered hover-slide" onClick={() => {
            const filteredList = resList.filter(
                (res) => res.info.avgRating > 4
            );
            setRestaurantList(filteredList);
        }}>
          Top Rated Restaurants
        </button>
        <button className="gb gb-bordered hover-slide" onClick={() => {
            const filteredList = resList
            setRestaurantList(filteredList);
        }}>
          Refresh
        </button>
      </div>
      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
