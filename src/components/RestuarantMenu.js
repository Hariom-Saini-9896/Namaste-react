import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestuarantMenu = () => {
  const { restuarantId } = useParams();
  const [restaurant, setRestaurant] = useState(null); // start with null
  const [loading, setLoading] = useState(true);       // loading state
  const [error, setError] = useState(null);           // error state

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      setLoading(true);
      const res = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.901961772547025&lng=74.8464957334394&restaurantId=${restuarantId}&catalog_qa=undefined&submitAction=ENTER#`
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const json = await res.json();
      setRestaurant(json.data);
      console.log("Fetched Data:", json.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  // Error UI
  if (error) {
    return <h2 style={{ color: "red" }}>Error: {error}</h2>;
  }

  // Safe rendering
  return ( !restaurant || loading) ? <Shimmer /> : (
    <div className="menu">
      <div>
        <h1>Restaurant id: {restuarantId}</h1>
        <h2>Restaurant Name : {restaurant?.cards?.[0]?.card?.card?.text}</h2>
        <h2>{restaurant?.cards?.[0]?.card?.card?.text}</h2>
        <h3>Cost For Two: {restaurant?.cards?.[2]?.card?.card?.info?.costForTwoMessage}</h3>
        {restaurant?.cards?.[2]?.card?.card?.info?.cloudinaryImageId && (
          <img
            src={IMG_CDN_URL + restaurant.cards[2].card.card.info.cloudinaryImageId}
            alt="Restaurant"
          />
        )}
      </div>
      <div>
        <h2>My Menu</h2>
        {console.log(Object.values(restaurant?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards))}
        
        <ul>
          {
            Object.values(restaurant?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards).map( (item) => {
              return <li key = {item.card.info.id}>
                        {item.card.info.name + ` (${item.card.info.price})`}
                     </li>
            } )
          }
        </ul>
      </div>
    </div>
  );
};

export default RestuarantMenu;
