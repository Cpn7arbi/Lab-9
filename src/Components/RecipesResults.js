import { Link } from 'react-router-dom';
const RecipesResults = ({ recipes }) => {
    return (
      recipes && (
        <div className="recipe-container">
          {recipes.map((item) => (
            <div className="recipe-card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <Link to={`/recipe-details/${item.id} `}>
              <h2>{item.title}</h2>
              </Link>
            </div>
          ))}
        </div>
      ) 
    );
  };
  
  export default RecipesResults;
  