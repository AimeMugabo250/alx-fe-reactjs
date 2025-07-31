import { useState } from 'react';

const Search = ({ onSearch, user, isLoading }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (searchTerm.trim()) {
      try {
        await onSearch(searchTerm);
      } catch (err) {
        setError("Looks like we can't find the user");
      }
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

export default Search;
