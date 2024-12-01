import './Search.css';
import { useState } from 'react';
import RecipesResults from './RecipesResults';
const Search = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [searchResults, setSearchResults] = useState(null);

  const handleClick = async () => {
    const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=e4f8107ea6934239bada27605deaec61&query=${searchQuery}`
     );
     
    const responseJSON = await response.json();
    setSearchResults(responseJSON.results);
  };

  return (<>
      <div className="search-wrapper">
        <input type="text" placeholder="Search by ingredients..." onChange={(e) => setSearchQuery(e.target.value)} />
        <button onClick={handleClick}>Search</button>
      </div>
      {searchResults && <RecipesResults recipes={searchResults} /> }
    </>
  );
};

export default Search;
