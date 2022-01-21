import axios from "axios";
import { Hits } from "../models/recipe-model";

export function fetchRecipe():Promise<Hits[]> {
    const apiId = process.env.REACT_APP_RECIPE_API_ID;
    const apiKey = process.env.REACT_APP_RECIPE_API_KEY;

    return axios.get("https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=1c5a9237&app_key=bd629295275277199c78015aa86cda67",{
        params:{
            q: "chicken",
            app_id: apiId,
            api_key: apiKey
        }
    })
    .then(res=>res.data.hits)
}