import React, {useState} from "react";

function PlantCard({plant}) {

  const [isStock, setIsStock] = useState(true)

  const handleClick = () => {
    setIsStock(isStock => !isStock)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isStock ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
