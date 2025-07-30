import { useState } from 'react';
import { fetchUserData } from '../../services/githubService';
import { 
  Box, 
  TextField, 
  Button, 
  Avatar, 
  Typography, 
  Link, 
  CircularProgress,
  Paper
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
      setError('Looks like we can\'t find the user');
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          GitHub User Search
        </Typography>
        
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <TextField
              fullWidth
              label="Enter GitHub username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Button 
              type="submit" 
              variant="contained" 
              disabled={loading}
            >
              Search
            </Button>
          </Box>
        </form>

        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
            <CircularProgress />
            <Typography sx={{ ml: 2 }}>Loading...</Typography>
          </Box>
        )}

        {error && (
          <Typography color="error" sx={{ my: 2 }}>
            {error}
          </Typography>
        )}

        {userData && (
          <Box sx={{ mt: 3, display: 'flex', gap: 3, alignItems: 'center' }}>
            <Avatar 
              src={userData.avatar_url} 
              alt={userData.login} 
              sx={{ width: 100, height: 100 }}
            />
            <Box>
              <Typography variant="h5">
                {userData.name || userData.login}
              </Typography>
              {userData.bio && (
                <Typography variant="body1" sx={{ my: 1 }}>
                  {userData.bio}
                </Typography>
              )}
              <Link 
                href={userData.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Profile
              </Link>
            </Box>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default Search;