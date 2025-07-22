import React, { useEffect } from 'react';
import { useRecipeStore } from '../recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const initializeFilteredRecipes = useRecipeStore(state => state.initializeFilteredRecipes);

  // initialize filteredRecipes on mount
  useEffect(() => {
    initializeFilteredRecipes();
  }, [initializeFilteredRecipes]);

  if (!filteredRecipes.length) {
    return <p>No recipes found.</p>;
  }

  return (
    <ul>
      {filteredRecipes.map(recipe => (
        <li key={recipe.id}>{recipe.title}</li>
      ))}
    </ul>
  );
};

export default RecipeList;
