import { Hits } from '../models/recipe-model';
import { useState } from 'react';
import "./Result.css"

export interface SmallRecipeProp {
    recipe: Hits,
}

export function Result({recipe}:SmallRecipeProp) {

    const [ noImage, setNoImage ] = useState(false)

    return (
        <div className="Result">
            <h3>{recipe.recipe.label}</h3>

            {recipe.recipe.images.SMALL.url !== undefined &&

            <div className="image">
            <img src={recipe.recipe.images.SMALL.url} alt="" /> </div>
            }
            
            <ul>
                {recipe.recipe.ingredientLines.map((ingredient, i) => <li key={i}>
                {ingredient}
                    </li> )}  
            </ul>
            <p className="link"><a href={recipe.recipe.url} target="_blank">Link to Recipe</a></p>
        </div>
    )
}



