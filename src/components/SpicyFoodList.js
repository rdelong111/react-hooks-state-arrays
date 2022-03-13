import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState('All');

  const foodsDisplay = foods.filter((food) => {
    return filterBy === 'All' ? true : food.cuisine === filterBy;
  });

  const foodList = foodsDisplay.map((food) => (
    <li 
    key={food.id}
    onClick={() => handleLiClick(food.id)}
    >
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    setFoods([...foods, newFood]);
  }

  function handleLiClick(ID) {
    const newList = foods.map((food) => {
      return food.id === ID ? {...food, heatLevel: food.heatLevel + 1} : food
    });
    setFoods(newList);
  }

  function handleFilterChange(e) {
    setFilterBy(e.target.value);
  }

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;