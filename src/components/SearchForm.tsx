import React from "react";
import { useState, FormEvent } from "react";

interface SearchReicpe {
  onSubmit: (searchTerm: string) => void;
}

export function SearchForm({ onSubmit }: SearchReicpe) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  function handleSearchSubmit(event: FormEvent) {
    event.preventDefault();

    onSubmit(searchTerm);
  }
  return (
    <div className="SearchForm" onSubmit={handleSearchSubmit}>
      <form >
        <div className="searchBar">
          <label htmlFor="search">Search for a recipe</label>
          <input
            type="text"
            name="search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="search-icon"
            viewBox="0 0 16 16"
            onClick={handleSearchSubmit}
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>

          <p>Filter by type:</p>
          <label htmlFor="vegetarian">Vegetarian</label>
          <input
            type="checkbox"
            name="vegetarian"
            id="vegetarian"
            value="vegetarian"
            onChange={() => setSearchTerm(searchTerm + "&vegetarian")}
          />
          <br />
          <label htmlFor="gluten-free">Gluten Free</label>
          <input
            type="checkbox"
            name="gluten-free"
            id="gluten-free"
            value="gluten+free"
            onChange={() => setSearchTerm(searchTerm + "&gluten+free")}
          />
          <br />
          <label htmlFor="low-carb">Low Carb</label>
          <input
            type="checkbox"
            name="low-carb"
            id="low-carb"
            value="low+carb"
            onChange={() => setSearchTerm(searchTerm + "&low+carb")}
          />
          <br />
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
}
