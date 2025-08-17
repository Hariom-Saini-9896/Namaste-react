import { useState } from "react";
import { restaurantList } from "../constants";
import ResturantCard from "./ResturantCard";


// Our filter data lagorithm

function filterData(searchText, searchRestaurantList){
  if(searchText === "") return searchRestaurantList;

  const filteredData = searchRestaurantList.filter( (restaurant) => restaurant.card.info.name.includes(searchText) )
  return filteredData
}



const  Body = () => {

  //  searchText is a local state variable - destructuring in an array
  // const [searchClick, setSearchClick] = useState("False") just for fun
  const [searchText, setSearchText] = useState(""); // To Create State Variable. useState() returns Array
  const [searchRestaurantList, setSearchRestaurantList] = useState(restaurantList) // giving default value as ouor dummy data

  return (
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
            const data = filterData(searchText, searchRestaurantList); // giving you search value and all my data searchRestaurantList -> is me se find kr k lao searched value
            setSearchRestaurantList(data) // and update my data list searchRestaurantList
          } }
          >Search</button>
      </div>

      <div className="resturant-list">
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
          searchRestaurantList.map( (restaurant) => {
            return <ResturantCard {...restaurant.card.info} key={restaurant.card.info.id}/> // Passing props
          } )
        }
      </div>
    </>
  )
}

export default Body;


// There is only one way data binding in REACT