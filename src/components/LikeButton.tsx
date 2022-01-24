import React, {useState} from "react";
import Heart from "react-animated-heart";
import { Hits } from "../models/recipe-model";
import { recipeGroup, addRecipe } from "../models/recipe-model";

function LikeButton(){

    let [recipes, setRecipes] = useState<Hits[]>(recipeGroup)
    function handleAdd(recipe: Hits){
        setRecipes(prevRecipes => {
            const newRecipes = prevRecipes?.slice(0);
            newRecipes?.push(recipe);
            return newRecipes;
        });
        addRecipe(recipe)
    }




    const [isClick, setClick] = useState(false);
    const likeButton = ()=>{
        setClick(!isClick)
    }
    
    
    // const handleChange = (e) => {
    //     setValue(e.target.value);
    //     localStorage.setItem("inputValue", e.target.value);
    //   };


    // const [favorites, setFavorites] = useState<Recipe>()
    // const i = 0;
    // const addFav = (item)=>{
    //     for(let i= 0; i<=favorites.to; i++){
    //         if(i = favorites?.from){
    //             addFav(favorites);
    //         }
    //     }
    // }


    return(
        <div className={isClick? "liked": "unliked"}>
            <div className= "heart" style={{textAlign:"center"}} >
                <Heart isClick={isClick} onClick={likeButton}>{isClick? "unlike":"like"}/</Heart>
            </div>
        <button onClick={likeButton}>{isClick? "Unlike":"Like"}</button>
    </div>
    )






}

export default LikeButton
