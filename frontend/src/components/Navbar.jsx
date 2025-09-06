import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { Button } from "./ui/button.jsx";

export default function Navbar() {
  const { user, loginAs, logout } = useAuth();

  return (
    <nav className="w-full border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 sticky top-0 z-10">
      <div className="mx-auto max-w-5xl px-4 py-2 flex items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <Link to="/" className="font-semibold">RBAC Demo</Link>
          <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
            <Link to="/admin" className="hover:underline">Admin</Link>
            <Link to="/user" className="hover:underline">User</Link>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm mr-2">Role: <strong>{user.role}</strong></span>
          <Button variant="outline" onClick={() => loginAs("user")}>Login as User</Button>
          <Button variant="secondary" onClick={() => loginAs("admin")}>Login as Admin</Button>
          <Button variant="ghost" onClick={logout}>Logout</Button>
        </div>
      </div>
    </nav>
  );
}
