import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  
  const platsElements = plants.map((plant) => {
    return <PlantCard
      key={plant.id}
      plant={plant}
    />
  })


  return (
    <ul className="cards">
      {platsElements}
    </ul>
  );
}

export default PlantList;
