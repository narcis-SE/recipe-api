import { Hits } from '../models/recipe-model';
<<<<<<< HEAD:src/components/Result.tsx
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
=======
import { Main } from './Main';
export interface Props {
    recipes: Hits[]
}

export const Result = ({recipes}:Props)=>{
    return(
        <div>
            {recipes.map((recipe,i)=> <Main key={i} recipe={recipe}/>)}
        </div>
    )
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
>>>>>>> dab2c406863e412c1e57070bd8853aef37949765:src/components/NotResult.tsx



