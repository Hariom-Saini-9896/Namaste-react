import { IMG_CDN_URL } from "../constants"


// getting props on the fly
const ResturantCard = ({defaultPrice, category, name, imageId, price}) => {
  // console.log(restaurant);


  //  Destructuring this restaurant. Its good but what i want now is want destructuring in parameters
  // const {imageId, name, category, price} = restaurant.card.info;
  
  return(
    <div className="card">
      <img src={IMG_CDN_URL + imageId} alt={name}/>
      <h2>{name}</h2>
      <h3>{category}</h3>
      <h3> {defaultPrice ?? price} </h3>  {/* Or we can  use ternanry operator : <h4>{ defaultPrice ? defaultPrice :  price}</h4> */}
    </div>
  )
}

export default ResturantCard;