import axios from "axios";
import { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/recipes")
      .then((res) => setRecipes(res.data.recipes))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default Home;
