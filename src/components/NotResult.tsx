import { Hits } from '../models/recipe-model';
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



