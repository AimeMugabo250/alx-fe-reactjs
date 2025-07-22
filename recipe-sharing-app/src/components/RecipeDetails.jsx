import { useRecipeStore } from '../store/recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useState } from 'react';

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );
  const [isEditing, setIsEditing] = useState(false);

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      {!isEditing ? (
        <>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <DeleteRecipeButton recipeId={recipe.id} />
        </>
      ) : (
        <EditRecipeForm recipe={recipe} onClose={() => setIsEditing(false)} />
      )}
    </div>
  );
};

export default RecipeDetails;
