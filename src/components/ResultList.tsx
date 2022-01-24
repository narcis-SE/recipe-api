import { useEffect, useState } from "react";
import { Hits } from "../models/recipe-model";
import { fetchRecipe } from "../services/RecipeApiService";
import { searchRecipe } from "../services/RecipeApiService";
import { SearchForm } from "./SearchForm";
import { Result } from "./Result";
import { favorites, addFavorite } from "../models/favoritesLists";
import "./ResultList.css";


export interface SmallRecipeProp {
  recipe: Hits,
}

export function ResultList() {

  const[recipeList, setRecipeList] = useState<Hits[]>([])
  const[searchTerm, setSearchTerm] = useState<string>("");
  
  useEffect(() => {
    if (searchTerm) {
      searchRecipe(searchTerm).then((response) => setRecipeList(response));
    } else {
      fetchRecipe().then((recipe) => setRecipeList(recipe));
    }
  }, [searchTerm]);

  function handleFormSubmit(searchTerm: string) {
    setSearchTerm(searchTerm);
  }
  
  function addToFavorites(recipe: Hits){
    addFavorite(recipe)
  }

  return (
    <div className="ResultList">
      <div>
        <SearchForm onSubmit={handleFormSubmit} />
      </div>
      <br></br>

      <h1>Recipes For You</h1>
      <ul className="ResultContainer">
        {recipeList.map((recipe, i) => (
           <Result key={i} recipe={recipe} onFavorite={addToFavorites} //onClose={closeModal} onClick={openModal}
           />  ))}
      </ul>
    </div>
  );
}
