import { Hits } from '../models/recipe-model';
import "./ResultExpanded.css"

export interface Prop {
    recipe: Hits,
    onClose: ()=>void
}

export function ResultExpanded({recipe, onClose}:Prop) {

    return (
        <div className="ResultExpanded">
            <p className="close"><i className="material-icons" onClick={onClose}>close</i></p>
            <h3>{recipe.recipe.label}</h3>

            <div className="scroll">
            <div className="image">
            <img src={recipe.recipe.image} alt="" /> 
            </div>
            <br/>
            <p>Ingredients:</p>
            <ul>
            {recipe.recipe.ingredients.map((ingredient, i) => 
                <li key={i}>
                    {ingredient.text}
                </li>)} 
            </ul>
            </div>
            <p className="link"><a href={recipe.recipe.url} target="_blank">Link to Recipe</a></p>
        </div>
    )
}



