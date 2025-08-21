import { useState, useEffect } from "react";
import { restaurantList, SWIGGY_RESTUARANT_API } from "../constants";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


// Our filter data lagorithm

function filterData(searchText, searchRestaurantList){
  // if(searchText === "") return searchRestaurantList;

  const filteredData = searchRestaurantList.filter( (restaurant) => restaurant?.card?.info?.name?.toUpperCase()?.includes(searchText.toUpperCase()) )
  return filteredData
}



const  Body = () => {

  //  searchText is a local state variable - destructuring in an array
  // const [searchClick, setSearchClick] = useState("False") just for fun
  const [allRestaurants, setAllRestaurants] = useState([]) // its keeping all restaurants. we set by api in useEffect
  const [filteredRestaurant, setFilteredRestaurant] = useState([]) // Its keeping all filtered restaurants
  const [searchText, setSearchText] = useState(""); // To Create State Variable. useState() returns Array


  // empty dependancy array => once after render
  // dep array [searchText] => once after initial render + everytime render (when dependancy changes Here. searchText)
  useEffect( () => {
    // console.log("useEffect");

    // API Call (Best place to make API calls Inside useEfect)
    try {
      getSwiggyData()
    } catch (error) {
      alert(error)
    }
  }, [] )

  async function getSwiggyData() {
    const data = await fetch(SWIGGY_RESTUARANT_API)
    const jsonData = await data.json();
    const restaurantCards = jsonData?.data?.cards?.slice(3);
    console.log(restaurantCards);
    setAllRestaurants(restaurantCards)
    setFilteredRestaurant(restaurantCards)
  }

  console.log("render UI");
  
  // Conditional Rendring
  // If restaurant is empty => shimmer UI
  // if restaurant has data => actual data UI

  // not render component (Early retrun)
  if (!allRestaurants) return null;

  // if (filteredRestaurant?.length === 0)
  //     return <h1>No Such Restaurant Found.</h1>

  return allRestaurants.length === 0 ? (
    <Shimmer/>
  ) : (
      <>
        <div className="search-container">
          {/* Here we are doing two way binding. Reading as well as Writing at the same time. */}
          <input className="search-input"
                type="text"
                placeholder="Search"
                value={searchText} // text box ki value
                onChange={ (e) => {
                  // e.target.value => whatever you write in input box
                  setSearchText(e.target.value)
                } }
          />
          {/* <button onClick={ () => { setSearchClick(prev => prev === "False" ? "True" : "False")} }>Search</button>
          <h3>{searchClick}</h3> */}
          <button 
            className="search-btn"
            onClick={ () => {
              // Need to filter the data. When apply filter we have make update my restaurantList. but i cann't update it directly i have to maintain a state for this.
              // update the state - searchRestaurantList
              const data = filterData(searchText, allRestaurants); // giving you search value and all my data searchRestaurantList -> is me se find kr k lao searched value
              setFilteredRestaurant(data) // and update my data list searchRestaurantList
            } }
            >Search</button>
        </div>

        <div className="restuarant-list">
          {/* <ResturantCard restaurant = {restaurantList[0]}/> OLD way to pass props same  for  all*/}

          {/* <ResturantCard {...restaurantList[0].card.info}/>  Passing props by spread operator 
          <ResturantCard {...restaurantList[1].card.info}/>
          <ResturantCard {...restaurantList[2].card.info}/>
          <ResturantCard {...restaurantList[3].card.info}/>
          <ResturantCard {...restaurantList[4].card.info}/>
          <ResturantCard {...restaurantList[5].card.info}/>
          <ResturantCard {...restaurantList[6].card.info}/>
          <ResturantCard {...restaurantList[7].card.info}/>
          <ResturantCard {...restaurantList[8].card.info}/> */}

          {/* Now same thing with map because we have lots of data */}
          { 
            // {/* You have to write logic for no restaurant found here.First Shrimmer than Not found message. */}
            filteredRestaurant.map( (restaurant) => {
              return <Link to={"/restuarant/"+restaurant?.card?.card?.info?.id}
                          key={restaurant?.card?.card?.info?.id}>
                        <ResturantCard {...restaurant?.card?.card?.info}  />
                     </Link> 
            } )
          }
        </div>
      </>
    )
}

export default Body;


// There is only one way data binding in REACT