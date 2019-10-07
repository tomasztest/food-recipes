import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients, totalWeight }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.text}{" "}
            <span className="grams">{ingredient.weight.toFixed(2)}g</span>
          </li>
        ))}
      </ol>
      <div className={style.details}>
        <ul>
          <li>{calories.toFixed(0)} kcal</li>
          <li>{totalWeight.toFixed(2)}g</li>
          <li>{((calories / totalWeight) * 100).toFixed(2)} kcal/100g</li>
        </ul>
        <img className={style.image} src={image} alt={title} />
      </div>
    </div>
  );
};

export default Recipe;
