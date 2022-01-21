import { useState } from 'react';
import { text } from 'stream/consumers';
import { Hits } from '../models/recipe-model';
import { useState } from 'react';
import "./Result.css"

export interface SmallRecipeProp {
    recipe: Hits,
}


export function Result({recipe}:SmallRecipeProp) {

    const[check, setCheck] = useState<boolean>(true);

  

    return (
        <div className="Result">
            <h3>{recipe.recipe.label}</h3>

            {recipe.recipe.images.SMALL.url !== undefined &&

            <div className="image">
            <img src={recipe.recipe.images.SMALL.url} alt="" /> </div>
            }
            
            <ul>
            {recipe.recipe.ingredients.map((ingredient, i) => 
                <li key={i}>
                    {ingredient.text}
                </li>)} 
            </ul>
            <p className="link"><a href={recipe.recipe.url} target="_blank">Link to Recipe</a></p>
        </div>
    )
}



