import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";


function PlantPage() {

  const [plants, SetPlants] = useState([])

  useEffect( () => {
    fetch('http://localhost:6001/plants')
    .then(res => res.json())
    .then(data => SetPlants(data))
  }, [])

  const addNewPlants = newPlant => {
    SetPlants(plants => [newPlant, ...plants])
  }

  const [search, setSearch] = useState('')

  const changeSearch = newSearch => {
    setSearch(newSearch)
  }

  const filteredSearch = plants.filter((newPlant) => {
    return newPlant.name.toLowerCase().includes(search.toLocaleLowerCase())
  })

  return (
    <main>
      <NewPlantForm addNewPlants={addNewPlants}/>
      <Search changeSearch={changeSearch} />
      <PlantList plants={filteredSearch} />
    </main>
  );
}

export default PlantPage;
