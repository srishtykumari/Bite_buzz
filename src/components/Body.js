import React from "react";
import { useEffect, useState } from "react";
import RestorentCard from "./RestorentCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
const [filterdRestaurant, setFilterdRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.613456620165888&lng=85.1206148788333&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    setListOfRestaurant(
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterdRestaurant(json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="Search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //filter the restraunt cards and update the UI
              // searchText
              console.log(searchText);

              const filterdRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

             setFilterdRestaurant(filterdRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.resData && res.info.resData.avgRating > 4.3
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      {/* <div className="search">Search</div> */}
      <div className="res-container">
        {filterdRestaurant.map((restorent) => (
          <RestorentCard key={restorent.info.id} resData={restorent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
