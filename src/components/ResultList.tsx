import React, { useEffect, useState } from "react"
import { Hits } from "../models/recipe-model"

import { fetchRecipe } from "../services/RecipeApiService"

export function ResultList() {
    const[recipeList, setRecipeList] = useState<Hits[]>([])
    useEffect(()=>{
        fetchRecipe().then(
            recipeList=>setRecipeList(recipeList)
        );
    }, [])




    return (
        <div>
            <h1>Result List</h1>
            <ul>
                {
                    recipeList.map((recipeList,i)=>
                    <li key={i}>
                        <p>{recipeList.recipe.label}</p>
                        <p>{recipeList.recipe.ingredientLines}</p>
                    </li>
                    
                    
                    )
                }
            </ul>
            
        </div>
    )
}
