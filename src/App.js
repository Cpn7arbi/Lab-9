import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Footer from './Components/Footer.js';
import Home from './Components/Home.js';
import './App.css';
import RecipeDetails from './Components/RecipeDetails.js'
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe-details/:id" element={<RecipeDetails />}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;




























/*import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}

function Home() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async (query) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=82e7194dfaba4237a43fa939c31d6143&query=${query}`
    );
    const data = await response.json();
    return data.results;
  };

  const handleSearch = async () => {
    if (!query.trim()) return; // Prevent empty searches
    const results = await searchRecipes(query);
    setRecipes(results);
  };

  const navigate = useNavigate();

  return (
    <div>
      <h1>Recipe Finder</h1>
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a recipe"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            onClick={() => navigate(`/recipe/${recipe.id}`)}
            style={{ cursor: "pointer", border: "1px solid #ddd", padding: "10px", margin: "10px" }}
          >
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} width="200" />
          </div>
        ))}
      </div>
    </div>
  );
}

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state

  const getRecipeDetails = async (id) => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=YOUR_API_KEY`
      );
      const data = await response.json();
      setRecipe(data);
    } catch (error) {
      console.error("Failed to fetch recipe details:", error);
    } finally {
      setLoading(false); // Ensure loading is set to false even if an error occurs
    }
  };

  useEffect(() => {
    getRecipeDetails(id);
  }, [id]);

  // Show a loading message while the data is being fetched
  if (loading) return <div>Loading...</div>;

  // Check if recipe exists to prevent accessing undefined properties
  if (!recipe) return <div>Recipe not found!</div>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <h3>Ingredients</h3>
      <ul>
        {recipe.extendedIngredients?.map((ing) => (
          <li key={ing.id}>{ing.original}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p>{recipe.instructions || "No instructions provided."}</p>
    </div>
  );
}

export default App;
*/