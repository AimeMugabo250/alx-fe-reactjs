import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("auth", "true");
    navigate("/profile");
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Login Page</h1>
      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Login
      </button>
    </div>
  );
}