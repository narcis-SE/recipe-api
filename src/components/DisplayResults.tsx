import React from 'react';
import { Header } from './Header';
import { SearchForm } from './SearchForm';
import { ResultList } from './ResultList';
import { Hits } from '../models/recipe-model';

interface RecipeProp{
  recipe: Hits
}


export const Main =({recipe}:RecipeProp)=>{
  return(
    <div>
      <h1>{recipe.recipe.label}</h1>
      <img src={recipe.recipe.image} style={{}}/>
    </div>
  )
}
// export default function Main() {
//   return (
//   <div>
//          <Header />


//         <ResultList />

//   </div>
//   );
  
// }
