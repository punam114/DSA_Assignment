import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const [isFav, setIsFav] = useState(false);
  const navigate = useNavigate();

  const toggleFavorite = () => setIsFav(!isFav);

  return (
    <div className="card">
      <img src={recipe.image} alt={recipe.name} onClick={() => navigate(`/recipe/${recipe.id}`)} />
      <h3>{recipe.name}</h3>
      <p>{recipe.cuisine}</p>
      <button onClick={toggleFavorite}>
        {isFav ? "💖" : "🤍"}
      </button>
    </div>
  );
};

export default RecipeCard;
