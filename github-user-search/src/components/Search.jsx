import { useState } from 'react';

const Search = ({ onSearch, user, isLoading }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  // ✅ Add this function above handleSubmit
const fetchUserData = async (username) => {
  try {
    await onSearch(username);
  } catch (err) {
    setError("Looks like we cant find the user");
  }
};

// ✅ Then update handleSubmit to call fetchUserData
const handleSubmit = async (e) => {
  e.preventDefault();
  setError(null);

  if (searchTerm.trim()) {
    await fetchUserData(searchTerm);
  }
};

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter GitHub username"
          style={{ flex: 1, padding: '8px' }}
        />
        <button
          type="submit"
          style={{
            padding: '8px 16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Search
        </button>
      </form>

      {isLoading && <p>Loading...</p>}

      {error && (
        <p style={{ color: 'red', marginTop: '10px' }}>
          {error}
        </p>
      )}

      {user && (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <img
            src={user.avatar_url}
            alt="avatar"
            style={{ width: '100px', borderRadius: '50%' }}
          />
          <h3>{user.login}</h3>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};





import { useState } from 'react';

const Search = ({ onAdvancedSearch }) => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdvancedSearch({ username, location, minRepos });
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded-xl shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border border-gray-300 rounded px-3 py-2"
          type="text"
          placeholder="GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="w-full border border-gray-300 rounded px-3 py-2"
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          className="w-full border border-gray-300 rounded px-3 py-2"
          type="number"
          placeholder="Minimum Repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;

