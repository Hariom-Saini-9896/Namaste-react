import { IMG_CDN_URL } from "../constants"


// getting props on the fly
const ResturantCard = ({name, cloudinaryImageId, costForTwo, category = "Burger"}) => {
  // console.log(restaurant);


  //  Destructuring this restaurant. Its good but what i want now is want destructuring in parameters
  // const {imageId, name, category, price} = restaurant.card.info;
  
  return(
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt={name}/>
      <h2>{name}</h2>
      <h3>{category}</h3>
      <h3> {costForTwo ?? "200"} </h3>  
      {/**  Or we can  use ternanry operator : <h4>{ costForTwo ? costForTwo :  price}</h4>*/}
    </div>
  )
}

export default ResturantCard;