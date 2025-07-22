import { Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h1>🍽️ Recipe Sharing App</h1>
      <AddRecipeForm />
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route
          path="/recipe/:id"
          element={
            <RecipeDetailsWrapper />
          }
        />
      </Routes>
    </div>
  );
}

// Wrapper to get recipeId from URL params
import { useParams } from 'react-router-dom';

const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  const recipeId = Number(id); // IDs are numeric as per your store
  return <RecipeDetails recipeId={recipeId} />;
};

export default App;
