import { format } from "path/posix";
import React, {useState} from "react";
import Heart from "react-animated-heart";
import { Hits, Recipe } from "../models/recipe-model";
import { fetchRecipe } from "../services/RecipeApiService";
import { FavoriteList } from "./FavoriteList";


export interface SmallRecipeProp {
    recipe: Hits,
  }

function LikeButton(){
    const [isClick, setClick] = useState(false);
    const likeButton = ()=>{
        setClick(!isClick)
    }
    const [value, setValue] = useState("")
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
