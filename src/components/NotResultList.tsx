import React, { useEffect, useState } from "react"
import { Hits } from "../models/recipe-model"
import { fetchRecipe } from "../services/RecipeApiService"
import { searchRecipe } from "../services/RecipeApiService"
import { Result } from "./Result"
import { SearchForm } from "./SearchForm"

export interface MainProp{
    recipe: Hits[]
    setRecipe: () => void
}


export function ResultList() {
    const[recipeList, setRecipeList] = useState<Hits[]>([])
    const[searchTerm, setSearchTerm] = useState<string>("");

    useEffect( ()=>{
        if(searchTerm){
            searchRecipe(searchTerm).then(
                response => setRecipeList(response)
            )
        } else{
            fetchRecipe().then(
                recipe=>setRecipeList(recipe)
            )

        }
    }, [searchTerm])

    // useEffect(()=>{
    //     fetchRecipe().then(
    //         recipeList=>setRecipeList(recipeList)
    //     );
    // }, [])
    function handleFormSubmit(searchTerm: string){
        setSearchTerm(searchTerm);
    }
    




    return (
        <div>
            <h1>Result List</h1>
            <SearchForm onSubmit={handleFormSubmit}/>
            <Result recipes={recipeList}/>
            
        </div>
    )
}
