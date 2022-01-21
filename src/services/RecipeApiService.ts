import axios from "axios";
import { Hits } from "../models/recipe-model";


const apiId = process.env.REACT_APP_RECIPE_API_ID;
const apiKey = process.env.REACT_APP_RECIPE_API_KEY;

export function fetchRecipe():Promise<Hits[]> {

    return axios.get("https://api.edamam.com/api/recipes/v2",{
        params:{
            type: "public",
            q: "dinner",
            app_id: apiId,
            app_key: apiKey
        }
    })
    .then(res=>res.data.hits)
}

export function searchRecipe(query:string):Promise<Hits[]>{
    return axios.get("https://api.edamam.com/api/recipes/v2",{
        params:{
            type: "public",
            q: query,
            app_id: apiId,
            app_key: apiKey
        }
    })
    .then(res=>res.data.hits);
}   