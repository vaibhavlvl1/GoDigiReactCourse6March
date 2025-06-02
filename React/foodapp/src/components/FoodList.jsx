import React from "react";
import FoodDetails from "./FoodDetails";

export default function FoodList({ foodList }) {
  return (
    <div className="foodList">
      {!foodList
        ? "Food List is Now Loading"
        : foodList.map((food) => (
            <FoodDetails key={food.food.foodId} food={food} />
          ))}
    </div>
  );
}
