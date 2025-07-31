// import { useState } from 'react';

// const Search = ({ onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null); // Reset error on new search
    
//     if (searchTerm.trim()) {
//       try {
//         await onSearch(searchTerm);
//       } catch (err) {
//         setError("Looks like we can't find the user");
//       }
//     }
//   };

//   return (
//     <div style={{ maxWidth: '500px', margin: '20px auto' }}>
//       <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           placeholder="Enter GitHub username"
//           style={{ flex: 1, padding: '8px' }}
//         />
//         <button 
//           type="submit"
//           style={{
//             padding: '8px 16px',
//             backgroundColor: '#007bff',
//             color: 'white',
//             border: 'none',
//             borderRadius: '4px',
//             cursor: 'pointer'
//           }}
//         >
//           Search
//         </button>
//       </form>
      
//       {error && (
//         <p style={{ color: 'red', marginTop: '10px' }}>
//           {error}
//         </p>
//       )}
//     </div>
//   );
// };

// export default Search;

import { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setUserData(null);
    
    if (searchTerm.trim()) {
      setLoading(true);
      try {
        const data = await onSearch(searchTerm);
        setUserData(data);
      } catch (err) {
        setError("Looks like we can't find the user");
      } finally {
        setLoading(false);
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
          disabled={loading}
        />
        <button 
          type="submit"
          disabled={loading}
          style={{
            padding: '8px 16px',
            backgroundColor: loading ? '#cccccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'Loading...' : 'Search'}
        </button>
      </form>
      
      {loading && <p>Loading user data...</p>}
      
      {error && (
        <p style={{ color: 'red', marginTop: '10px' }}>
          {error}
        </p>
      )}

      {userData && (
        <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '20px' }}>
          <img 
            src={userData.avatar_url} 
            alt={userData.login}
            style={{ width: '100px', height: '100px', borderRadius: '50%' }}
          />
          <div>
            <h3>{userData.login}</h3>
            {userData.name && <p>{userData.name}</p>}
            <a 
              href={userData.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#007bff' }}
            >
              View Profile
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
