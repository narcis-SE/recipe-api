import { useEffect, useState } from "react"
import { Hits } from "../models/recipe-model"
import { fetchRecipe } from "../services/RecipeApiService"
import { searchRecipe } from "../services/RecipeApiService";
import { SearchForm } from "./SearchForm";
import { Result } from "./Result";
import "./ResultList.css";


    export interface RecipeProp{
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


        function handleFormSubmit(searchTerm: string){
            setSearchTerm(searchTerm);
        }

        return (
            <div>
                <h1>Result List</h1>
            
                <SearchForm onSubmit={handleFormSubmit}/>
             <ul>
                {recipeList.map((recipe, i) => <Result key={i} recipe={recipe} />)}  
            </ul>  
            </div>
 

    )        
}
