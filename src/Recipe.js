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
      <p>{calories.toFixed(0)} kcal</p>
      <p>{totalWeight.toFixed(2)}g</p>
      <p>{((calories / totalWeight) * 100).toFixed(2)} kcal/100g</p>
      <img className={style.image} src={image} alt={title} />
    </div>
  );
};

export default Recipe;
