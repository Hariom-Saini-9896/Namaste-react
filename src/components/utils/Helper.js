// Our filter data algorithm
export function filterData(searchText, searchRestaurantList){
  // if(searchText === "") return searchRestaurantList;

  const filteredData = searchRestaurantList.filter( (restaurant) => restaurant?.card?.info?.name?.toUpperCase()?.includes(searchText.toUpperCase()) )
  return filteredData
}
