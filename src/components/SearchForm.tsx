import React from "react"
import { useState, FormEvent } from "react"

interface SearchReicpe{
    onSubmit: (searchTerm: string) => void
}

export function SearchForm({onSubmit}:SearchReicpe) {
    const [searchTerm, setSearchTerm] = useState<string>("")

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
                <button>Search</button>
                </div>
            </form>  
            </div>
        )
    }