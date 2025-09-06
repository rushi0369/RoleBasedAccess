import { Link } from "react-router-dom";

export default function Unauthorized() {
  return (
    <div className="mx-auto max-w-md p-6 text-center">
      <h1 className="text-2xl font-semibold mb-2">Unauthorized</h1>
      <p className="text-gray-600 mb-4">You do not have access to this page.</p>
      <Link to="/" className="text-blue-600 hover:underline">Go Home</Link>
    </div>
  );
}
