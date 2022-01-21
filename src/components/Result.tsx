import { Hits } from '../models/recipe-model';
import "./Result.css"

export interface SmallRecipeProp {
    recipe: Hits,
}

export function Result({recipe}:SmallRecipeProp) {
    return (
        <div className="Result">
            <h3>{recipe.recipe.label}</h3>
            <div className="image"><img src={recipe.recipe.images.SMALL.url} alt="" /></div>
            <p className="ingredients">{recipe.recipe.ingredientLines}</p>
            <p className="link"><a href={recipe.recipe.url} target="_blank">Link to Recipe</a></p>
        </div>
    )
}



