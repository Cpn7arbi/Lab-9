import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
  const [recipeDetails, setRecipeDetails] = useState(null); // Initialize state
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=e4f8107ea6934239bada27605deaec61`);
      const responseJSON = await response.json();
      setRecipeDetails(responseJSON); // Set fetched data to state
    };
    fetchRecipe();
  }, [id]);

  if (!recipeDetails) {
    return <div>Loading...</div>; // Show loading until data is fetched
  }

  return (
    <div className="recipe-details">
      <h1>{recipeDetails.title}</h1>
      <img src={recipeDetails.image} alt={recipeDetails.title} />
      <div dangerouslySetInnerHTML={{ __html: recipeDetails.summary }} />
      <h2>Ingredients</h2>
      <ul>
        {recipeDetails.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <ol>
        {recipeDetails.analyzedInstructions[0]?.steps.map((step) => (
          <li key={step.number}>{step.step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetails;
