import React from "react";
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
  const [showContent, setShowContent] = React.useState(false);

  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <img className={style.image} src={image} alt="" />
      <button onClick={() => setShowContent(!showContent)}>Read more</button>
      {showContent && (
        <div>
          <ol>
            {ingredients.map((ingredient) => (
              <li>{ingredient.text}</li>
            ))}
          </ol>
          <p>Calories: {calories}</p>
        </div>
      )}
    </div>
  );
};

export default Recipe;