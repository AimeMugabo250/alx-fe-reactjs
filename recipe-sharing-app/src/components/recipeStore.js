import create from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],           // your original recipes array
  searchTerm: '',        // new search term
  filteredRecipes: [],   // filtered results based on search

  // action to set recipes (if needed)
  setRecipes: (recipes) => set({ recipes }),

  // update search term and automatically filter recipes
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(term);
  },

  // filter recipes based on search term (you can extend filters here)
  filterRecipes: (term) => {
    const search = term.toLowerCase();
    set(state => ({
      filteredRecipes: state.recipes.filter(recipe => 
        recipe.title.toLowerCase().includes(search)
        // add other criteria here if you want (ingredients, time, etc.)
      )
    }));
  },

  // initialize filteredRecipes to all recipes when loaded
  initializeFilteredRecipes: () => {
    set(state => ({
      filteredRecipes: state.recipes
    }));
  }
}));
