import { useState } from 'react';
import { Hits } from '../models/recipe-model';
import "./Result.css"
import { BrowserRouter as Router, Link, Navigate, Route, Routes } from 'react-router-dom';

export interface SmallRecipeProp {
    recipe: Hits,
}

export function Result({recipe}:SmallRecipeProp) {

    const[check, setCheck] = useState<boolean>(true);

    return (
        <div className="Result">
            <h3>{recipe.recipe.label}</h3>

            <div className="image">
            <img src={recipe.recipe.image} alt="" /></div>

            {/* <Link to="/ResultExpanded">Click here to see more details</Link> */}
            {/* <Router>
                <Link to=“/DetailExtended">Click here to see more details</Link> 
            <Routes>   
                <Route path=“/detailextended” element={<DetailExtended />} />
            </Routes>
            </Router> */}
            <p className="link"><a href={recipe.recipe.url} target="_blank">Link to Recipe</a></p>
        </div>
    )
}



