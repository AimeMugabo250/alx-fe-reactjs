import axios from "axios";

const githubAPI = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_API_KEY}`,
  },
});

export default githubAPI;
