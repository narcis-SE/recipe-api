import React from 'react'
import { Hits } from '../models/recipe-model';
import { Recipe } from '../models/recipe-model';
import "./Result.css";

interface RecipeProp {
    recipe: Recipe
}

// export function Result({recipe}:RecipeProp) {
//     return (
//         <div className="Result">
//             <h3>{recipe.label}</h3>
//             <div className="image"><img src={recipe.image} alt={recipe.label} /></div>
//             <p className="ingredients">{recipe.ingredientLines}</p>
//             <p className="link"><a href={recipe.url} target="_blank">Link to Giphy</a></p>
            
//         </div>
//     )
// }



