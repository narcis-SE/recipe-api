import { useState, FormEvent } from "react";
import "./SearchForm.css";

export interface SearchReicpe {
  onSubmit: (searchTerm: string) => void;
}

export interface FilterProps {
  searchTerm: string,
  setSearchTerm: (searchTerm)=>void
}

export function SearchForm({onSubmit}:SearchReicpe) {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const[isClick, setClick] = useState(true);

    const checkButton = ()=>{
      setClick(!isClick)
    }

    function handleSearchSubmit(event: FormEvent){
        event.preventDefault();

        onSubmit(searchTerm);
        setSearchTerm(searchTerm);
    }

  
  const [ showFilters, setShowFilters ] = useState(false);
  
  const clickOnce = () => setShowFilters(true);
  const clickTwice = () => setShowFilters(false);


return (
     
  <div className="SearchForm" onSubmit={handleSearchSubmit}>
    <form className="searchForm">
        <div className="searchBar">
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
        
      <label className="label-search" htmlFor="search">  Search for a recipe</label><br />
      <input type="text" name="search" onChange={(e)=>setSearchTerm(e.target.value)} />

    { !showFilters ?
    <p className="filterClickHere" onClick={clickOnce}>Click here to filter by type</p> : 
    <p className="filterClickHere" onClick={clickTwice}>Click here to close filters</p>
}

<div className="outerContainer" style={{ display: showFilters? "block" : "none"}}>
        <div className="filterContainer">
        <div className="innerContainer1">
          <p className="filter-class">Meal: </p>
    
          <input type="checkbox" name="breakfast" id="breakfast" value="breakfast" onClick={checkButton}
            onChange={isClick?  ()=>setSearchTerm(searchTerm + "&breakfast"): ()=>setSearchTerm(searchTerm + "")} />
          <label className="label-filter" htmlFor="breakfast">Breakfast</label>
       <br/>
          <input type="checkbox" name="brunch" id="brunch" value="brunch"
            onChange={()=>setSearchTerm(searchTerm + "&brunch")} />
          <label className="label-filter" htmlFor="brunch">Brunch</label>
       <br/>
          <input type="checkbox" name="lunch-dinner" id="lunch-dinner" value="lunch+dinner"
            onChange={()=>setSearchTerm(searchTerm + "&lunch/dinner")} />
          <label className="label-filter" htmlFor="lunch-dinner">Lunch/Dinner</label>
      <br />
          <input type="checkbox" name="appetizer" id="appetizer" value="appetizer"
            onChange={()=>setSearchTerm(searchTerm + "&appetizer")} />
          <label className="label-filter" htmlFor="appetizer">Appetizer</label>
       <br/>
          <input type="checkbox" name="cocktails" id="cocktails" value="cocktails"
            onChange={()=>setSearchTerm(searchTerm + "&cocktails")} />
          <label className="label-filter" htmlFor="cocktails">Cocktails</label>
       <br/>
          <input type="checkbox" name="dessert" id="dessert" value="dessert"
            onChange={()=>setSearchTerm(searchTerm + "&dessert")} />
          <label className="label-filter" htmlFor="dessert">Dessert</label>
       <br/>
    
       <p className="filter-class">Cuisine: </p>
    
          <input type="checkbox" name="mediterranean" id="mediterranean" value="mediterranean"
            onChange={()=>setSearchTerm(searchTerm + "&mediterranean")} />
          <label className="label-filter" htmlFor="mediterranean">Mediterranean</label>
        <br/>
          <input type="checkbox" name="japanese" id="japanese" value="japanese"
            onChange={()=>setSearchTerm(searchTerm + "&japanese")} />
          <label className="label-filter" htmlFor="japanese">Japanese</label>
        <br/>
          <input type="checkbox" name="mexican" id="mexican" value="mexican"
            onChange={()=>setSearchTerm(searchTerm + "&mexican")} />
          <label className="label-filter" htmlFor="mexican">Mexican</label>
        <br/>
          <input type="checkbox" name="italian" id="italian" value="italian"
            onChange={()=>setSearchTerm(searchTerm + "&italian")} />
          <label className="label-filter" htmlFor="italian">Italian</label>
        <br/>
          <input type="checkbox" name="french" id="french" value="french"
            onChange={()=>setSearchTerm(searchTerm + "&mexican")} />
          <label className="label-filter" htmlFor="french">French</label>
        <br/>
          <input type="checkbox" name="chinese" id="chinese" value="chinese"
            onChange={()=>setSearchTerm(searchTerm + "&chinese")} />
          <label className="label-filter" htmlFor="chinese">Chinese</label>
        <br/>
          <input type="checkbox" name="indian" id="indian" value="indian"
            onChange={()=>setSearchTerm(searchTerm + "&indian")} />
          <label className="label-filter" htmlFor="indian">Indian</label>
        <br/>
          <input type="checkbox" name="american" id="american" value="american"
            onChange={()=>setSearchTerm(searchTerm + "&american")} />
          <label className="label-filter" htmlFor="american">American</label>
        <br/>
        </div>
    
        <div className="innerContainer2">
          <p className="filter-class">Special Diet: </p>
    
          <input type="checkbox" name="low-carb" id="low-carb" value="low+carb"
            onChange={()=>setSearchTerm(searchTerm + "&low+carb")} />
          <label className="label-filter" htmlFor="low-carb">Low Carb</label>
      <br />
    
          <input type="checkbox" name="vegetarian" id="vegetarian" value="vegetarian"
            onChange={()=>setSearchTerm(searchTerm + "&vegetarian")} />
          <label className="label-filter" htmlFor="vegetarian">Vegetarian</label>
       <br/>
    
          <input type="checkbox" name="vegan" id="vegan" value="vegan"
            onChange={()=>setSearchTerm(searchTerm + "&vegan")} />
          <label className="label-filter" htmlFor="vegan">Vegan</label>
        <br/>
    
          <input type="checkbox" name="dairyFree" id="dairyFree" value="dairyFreeegetarian"
            onChange={()=>setSearchTerm(searchTerm + "&dairy+free")} />
          <label className="label-filter" htmlFor="dairyFree">Dairy Free</label>
        <br/>
    
        <input type="checkbox" name="gluten-free" id="gluten-free" value="gluten+free"
            onChange={()=>setSearchTerm(searchTerm + "&gluten+free")} />
          <label className="label-filter" htmlFor="gluten-free">Gluten Free</label>
        <br/>
    
        <input type="checkbox" name="wheat-free" id="wheat-free" value="wheat+free"
            onChange={()=>setSearchTerm(searchTerm + "&wheat+free")} />
          <label className="label-filter" htmlFor="wheat-free">Wheat Free</label>
        <br/>
    
        <input type="checkbox" name="egg-free" id="egg-free" value="egg+free"
            onChange={()=>setSearchTerm(searchTerm + "&egg+free")} />
          <label className="label-filter" htmlFor="egg-free">Egg Free</label>
        <br/>
          
        <input type="checkbox" name="peanut-free" id="peanut-free" value="peanut+free"
            onChange={()=>setSearchTerm(searchTerm + "&peanut+free")} />
          <label className="label-filter" htmlFor="peanut-free">Peanut Free</label>
        <br/>
    
        <input type="checkbox" name="tree-nut-free" id="tree-nut-free" value="tree-nut-free"
            onChange={()=>setSearchTerm(searchTerm + "&tree+nut+free")} />
          <label className="label-filter" htmlFor="tree-nut-free">Tree Nut Free</label>
        <br/>
    
        <input type="checkbox" name="soy-free" id="soy-free" value="soy-free"
            onChange={()=>setSearchTerm(searchTerm + "&soy+free")} />
          <label className="label-filter" htmlFor="soy-free">Soy Free</label>
        <br/>
    
        <input type="checkbox" name="soy-free" id="soy-free" value="soy-free"
            onChange={()=>setSearchTerm(searchTerm + "&soy+free")} />
          <label className="label-filter" htmlFor="shellfish-free">Shellfish Free</label>
        <br/>
          
        <input type="checkbox" name="pork-free" id="pork-free" value="pork-free"
            onChange={()=>setSearchTerm(searchTerm + "&pork+free")} />
          <label className="label-filter" htmlFor="pork-free">Pork Free</label>
        <br/>
    
        <input type="checkbox" name="red-meat-free" id="red-meat-free" value="red-meat-free"
            onChange={()=>setSearchTerm(searchTerm + "&red+meat+free")} />
          <label className="label-filter" htmlFor="red-meat-free">Red Meat Free</label>
        <br/>
    
        <input type="checkbox" name="kosher" id="kosher" value="kosher"
            onChange={()=>setSearchTerm(searchTerm + "&kosher")} />
          <label className="label-filter" htmlFor="kosher">Kosher</label>
        <br/>
        </div>
        </div>
        </div>
               <button type="submit" className="submit-btn">Search</button>
               <button type="reset"className="submit-btn">Reset</button>
                </div>
            </form>  
            </div>
        )
    }
