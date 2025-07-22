import { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const EditRecipeForm = ({ recipe, onClose }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    updateRecipe({ ...recipe, title, description });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }}
      />
      <button type="submit">Save</button>
      <button type="button" onClick={onClose} style={{ marginLeft: '10px' }}>
        Cancel
      </button>
    </form>
  );
};

export default EditRecipeForm;
