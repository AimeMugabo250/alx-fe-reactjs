import React, { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setError("All fields are required!");
      return;
    }
    setError("");
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
      if (!response.ok) throw new Error("Failed to register");
      const data = await response.json();
      console.log("User registered:", data);
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-gray-100 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Register (Controlled Form)</h2>
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
        Register
      </button>
    </form>
  );
}