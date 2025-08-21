import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">User Profile</h1>
      <nav className="flex gap-4 mb-4">
        <Link to="details" className="text-blue-600 underline">
          Profile Details
        </Link>
        <Link to="settings" className="text-blue-600 underline">
          Profile Settings
        </Link>
      </nav>

      {/* Nested route will render here */}
      <Outlet />
    </div>
  );
}
