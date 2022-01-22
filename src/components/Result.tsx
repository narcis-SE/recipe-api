
import { useState } from 'react';
import { Hits } from '../models/recipe-model';
import "./Result.css"


export interface SmallRecipeProp {
  recipe: Hits;
}

export function Result({ recipe }: SmallRecipeProp) {
  const [noImage, setNoImage] = useState(false);


    const[check, setCheck] = useState<boolean>(true);

    return (
        <div className="Result">
            <h3>{recipe.recipe.label}</h3>

            <div className="image">
            <img src={recipe.recipe.image} alt="" /> 
            </div>
            
            {/* <ul>
            {recipe.recipe.ingredients.map((ingredient, i) => 
                <li key={i}>
                    {ingredient.text}
                </li>)} 
            </ul> */}

            <p className="link"><a href={recipe.recipe.url} target="_blank">Link to Recipe</a></p>
        </div>
      )}

      <ul>
        <p>
          {recipe.recipe.ingredientLines.map((ingredient, i) => (
            <li key={i}>{ingredient}</li>
          ))}
        </p>
      </ul>
      <p className="link">
        <a href={recipe.recipe.url} target="_blank">
          Link to Recipe
        </a>
      </p>
    </div>
  );
}
