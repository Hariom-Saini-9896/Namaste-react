const Shimmer = () => {
  return (
    <div className="restuarant-list"> 
        {Array(17).fill("")
          .map( (e, index) => <div className="shimmer-card" key={index}></div> )
        }
    </div>
  )
}

export default Shimmer;