import axios from 'axios';

const API_BASE_URL = 'https://api.github.com';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error('User not found');
    }
    throw new Error('Failed to fetch user data');
  }
};

export const fetchUsersByAdvancedSearch = async ({ username, location, minRepos }) => {
  let query = '';

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await fetch(`https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=10`);
  const data = await response.json();

  if (!response.ok) throw new Error(data.message || "Search failed");

  return data.items;
};
