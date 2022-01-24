import { useState } from "react";
import { favorites } from "../models/favoritesLists";




function ListOfFavorites(){
    const[allRecipes, setAllRecipes] = useState(favorites);
    function handleDeleteRecipe(index:number){
        console.log(index);
        setAllRecipes(prev => [...prev.slice(0,index), ...prev.slice(index+1)])
        console.log(allRecipes)
    }
    
    return(
        <div className="FavoritesList">
            {favorites.map((recipes, i)=> <li key={i}>{recipes.recipe.label}
                <p onClick={()=> handleDeleteRecipe(i)}>Click to Delete</p>
            </li>)}
            
        </div>
    )
}
export default ListOfFavorites