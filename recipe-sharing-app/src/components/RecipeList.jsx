import React, { useEffect } from 'react';
import { useRecipeStore } from '../recipeStore';
import { Link } from 'react-router-dom'; // ✅ import Link

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const initializeFilteredRecipes = useRecipeStore(state => state.initializeFilteredRecipes);

  useEffect(() => {
    initializeFilteredRecipes();
  }, [initializeFilteredRecipes]);

  if (!filteredRecipes.length) {
    return <p>No recipes found.</p>;
  }

  return (
    <ul>
      {filteredRecipes.map(recipe => (
        <li key={recipe.id}>
          {/* ✅ Link to individual recipe details */}
          <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: 'blue' }}>
            {recipe.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;
