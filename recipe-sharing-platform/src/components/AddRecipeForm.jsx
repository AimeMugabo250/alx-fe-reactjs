import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});


  const [title, setTitle] = useState("");            // Recipe title
  const [ingredients, setIngredients] = useState(""); // Ingredients textarea
  const [instructions, setInstructions] = useState(""); // Steps textarea
  const [errors, setErrors] = useState({});          // Validation errors


  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    // Simple validation
    if (!title.trim()) validationErrors.title = "Title is required";
    if (!ingredients.trim() || ingredients.split("\n").length < 2)
      validationErrors.ingredients = "Enter at least 2 ingredients";
    if (!instructions.trim() || instructions.split("\n").length < 2)
      validationErrors.instructions = "Enter at least 2 steps";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // For now, just log the recipe
      const newRecipe = {
        title,
        ingredients: ingredients.split("\n"),
        instructions: instructions.split("\n"),
      };
      console.log("New Recipe Submitted:", newRecipe);

      // Clear form
      setTitle("");
      setIngredients("");
      setInstructions("");
      alert("Recipe submitted successfully!");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Add a New Recipe</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block font-medium mb-1">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-medium mb-1">Ingredients (one per line)</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows={4}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        {/* Instructions */}
        <div>
          <label className="block font-medium mb-1">Preparation Steps (one per line)</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            rows={4}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.instructions && <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Submit Recipe
        </button>
      </form>
    </div>

    const handleSubmit = (e) => {
  e.preventDefault(); // Prevent page reload

  let validationErrors = {};

  // Check if title is empty
  if (!title.trim()) validationErrors.title = "Title is required";

  // Check ingredients has at least 2 lines
  if (!ingredients.trim() || ingredients.split("\n").length < 2)
    validationErrors.ingredients = "Enter at least 2 ingredients";

  // Check instructions has at least 2 steps
  if (!instructions.trim() || instructions.split("\n").length < 2)
    validationErrors.instructions = "Enter at least 2 steps";

  setErrors(validationErrors); // Update state with errors

  // Only proceed if no errors
  if (Object.keys(validationErrors).length === 0) {
    // Your form submission logic here
    console.log({
      title,
      ingredients: ingredients.split("\n"),
      instructions: instructions.split("\n"),
    });
    alert("Recipe submitted successfully!");
    
    // Clear the form
    setTitle("");
    setIngredients("");
    setInstructions("");
  }
};


<input
  type="text"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
/>

<textarea
  value={ingredients}
  onChange={(e) => setIngredients(e.target.value)}
/>

<textarea
  value={instructions}
  onChange={(e) => setInstructions(e.target.value)}
/>


{errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
{errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
{errors.instructions && <p className="text-red-500 text-sm">{errors.instructions}</p>}

  );
}

export default AddRecipeForm;
