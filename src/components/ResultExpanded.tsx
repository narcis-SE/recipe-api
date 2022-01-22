import { useState } from 'react';
import { text } from 'stream/consumers';
import { Hits } from '../models/recipe-model';
import "./Result.css"

export interface SmallRecipeProp {
    recipe: Hits,
}

export function ResultExpanded({recipe}:SmallRecipeProp) {

    return (
        <div className="Result">
            <h3>{recipe.recipe.label}</h3>

            <div className="image">
            <img src={recipe.recipe.image} alt="" /> 
            </div>
            
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



