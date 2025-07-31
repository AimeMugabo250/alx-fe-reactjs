import { useState } from 'react';
import { fetchUserData } from '../services/githubService';
import { 
  Box, 
  TextField, 
  Button, 
  Avatar, // This serves as our img component
  Typography,
  CircularProgress
} from '@mui/material';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError(null);
    
    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError("Looks like we can't find the user"); // Added error message
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4, p: 3 }}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            fullWidth
            label="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button type="submit" variant="contained" disabled={loading}>
            Search
          </Button>
        </Box>
      </form>

      {loading && <CircularProgress />}

      {error && (
        <Typography color="error">
          {error} {/* Displays the error message */}
        </Typography>
      )}

      {userData && (
        <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', gap: 3 }}>
          {/* Avatar acts as our img element for user avatar */}
          <Avatar 
            src={userData.avatar_url} 
            alt={userData.login}
            sx={{ width: 100, height: 100 }}
          />
          <Box>
            <Typography variant="h6">{userData.name || userData.login}</Typography>
            <Typography>{userData.bio || 'No bio available'}</Typography>
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Search;
