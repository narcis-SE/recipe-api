import { useEffect, useState } from "react"
import { Hits } from "../models/recipe-model"
import { fetchRecipe } from "../services/RecipeApiService"
import { Result } from "./Result";
import "./ResultList.css";

export interface RecipeProp {
    recipeList: Hits[],
}

export function ResultList() {

    const[recipeList, setRecipeList] = useState<Hits[]>([]);

    useEffect(()=>{
        fetchRecipe().then(
            recipeList=>setRecipeList(recipeList)
        );
    }, [])
    
    return (
        <div>
            <h1>Result List</h1>
            <ul>
                {recipeList.map((recipe, i) => <Result key={i} recipe={recipe} />)}  
            </ul>
        </div>    
    )        
}
