import { useState } from 'react';
import { searchUsers } from './services/githubApi';
import SearchBar from './components/SearchBar/SearchBar';
import UserCard from './components/UserCard/UserCard';
import { Grid, Container, Typography } from '@mui/material';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    if (!query.trim()) return;
    
    setLoading(true);
    const results = await searchUsers(query);
    setUsers(results);
    setLoading(false);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        GitHub User Search
      </Typography>
      <SearchBar onSearch={handleSearch} />
      
      {loading ? (
        <Typography align="center">Loading...</Typography>
      ) : (
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {users.map(user => (
            <Grid item xs={12} sm={6} md={4} key={user.id}>
              <UserCard user={user} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default App;