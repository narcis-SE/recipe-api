import React from "react"

export function SearchForm() {
    return (
     
        <div className="SearchForm">
             <form className="searchForm">
                <label htmlFor="search">Search for a recipe</label>
                <div className="searchBar">
                <input type="text" name="search" />
                <button>Search</button>
                </div>
            </form>  
            </div>
        )
    }