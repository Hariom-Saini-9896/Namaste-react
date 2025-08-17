import { IMG_CDN_URL } from "../constants"


// getting props on the fly
const ResturantCard = ({price, category, name, imageId}) => {
  // console.log(restaurant);


  //  Destructuring this restaurant. Its good but what i want now is want destructuring in parameters
  // const {imageId, name, category, price} = restaurant.card.info;
  
  return(
    <div className="card">
      <img src={IMG_CDN_URL + imageId} alt="Burger"/>
      <h2>{name}</h2>
      <h3>{category}</h3>
      <h4>{price}</h4>
    </div>
  )
}

export default ResturantCard;