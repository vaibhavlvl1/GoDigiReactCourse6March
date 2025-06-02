import React from "react";

export default function FoodDetails({ food }) {
  return (
    <div className="foodCard">
      <div className="foodCardBody">
        <img src={food.food.image} alt="" />
      </div>
      <div className="foodtitle">{food.food.knownAs}</div>
      <div className="foodCardHover">
        <p>Energy : {food.food.nutrients.ENERC_KCAL} KCal</p>
        <p>Protein : {Math.round(food.food.nutrients.PROCNT)} g</p>
        <p>Fat : {Math.round(food.food.nutrients.FAT)} g</p>
        <p>Carbs : {Math.round(food.food.nutrients.CHOCDF)} g</p>
        <p>Fibre : {Math.round(food.food.nutrients.FIBTG)} g</p>
      </div>
    </div>
  );
}
