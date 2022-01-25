import React from 'react'
import { Hits } from "../models/recipe-model"

interface Props {
    recipe: Hits
    onDelete: () => void;
}

function ListOfFavorites2({recipe, onDelete}:Props) {

    return (
        <div className="ListOfFavorites2">
             {recipe.recipe.label}
            <i className="material-icons" onClick={onDelete}>delete</i>
        </div>
    )
}

export default ListOfFavorites2
