import { useState } from "react";
import { favorites } from "../models/favoritesLists";
import ListOfFavorites2 from "./ListOfFavorites2";
import { Hits } from "../models/recipe-model";
import { deleteFavorite } from "../models/favoritesLists";

function ListOfFavorites(){

    const[allRecipes, setAllRecipes] = useState<Hits[]>([]);

    function handleDeleteRecipe(index: number){
        console.log(index);
        setAllRecipes(prev => [...prev.slice(0, index), ...prev.slice(index+1)])
        deleteFavorite(index);
        console.log(allRecipes)
    }
    
    return(
        <div className="FavoritesList">

            {favorites.map((recipe, i)=> 
            <ListOfFavorites2 key={i} recipe={recipe} onDelete={()=>handleDeleteRecipe(i)} />)}

        </div>
    )
}
export default ListOfFavorites