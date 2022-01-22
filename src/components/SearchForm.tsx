import React from "react"
import { useState, FormEvent } from "react"

interface SearchReicpe{
    onSubmit: (searchTerm: string) => void
}

export function SearchForm({onSubmit}:SearchReicpe) {
    const [searchTerm, setSearchTerm] = useState<string>("");
    // const [ isChecked, setIsChecked ] = useState<Boolean>(true);

    function handleSearchSubmit(event: FormEvent){
        event.preventDefault();

        onSubmit(searchTerm);
}
    return (
     
        <div className="SearchForm" onSubmit={handleSearchSubmit}>
             <form className="searchForm">
                <label htmlFor="search">Search for a recipe</label>
                <div className="searchBar">
                <input type="text" name="search" onChange={(e)=>setSearchTerm(e.target.value)} />
                <p>Filter by type:</p>

                <label htmlFor="vegetarian">Vegetarian</label>
                <input type="checkbox" name="vegetarian" id="vegetarian" value="vegetarian"
                onChange={()=>setSearchTerm(searchTerm + "&vegetarian")} /><br/>

                <label htmlFor="gluten-free">Gluten Free</label>
                 <input type="checkbox" name="gluten-free" id="gluten-free" value="gluten+free"
                onChange={()=>setSearchTerm(searchTerm + "&gluten+free")} /><br/>

                <label htmlFor="low-carb">Low Carb</label>
                 <input type="checkbox" name="low-carb" id="low-carb" value="low+carb"
                onChange={()=>setSearchTerm(searchTerm + "&low+carb")} /><br/>

                <button>Search</button>
                </div>
            </form>  
            </div>
        )
    }