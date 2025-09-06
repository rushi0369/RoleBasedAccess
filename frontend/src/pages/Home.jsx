import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card.jsx";
import { Button } from "../components/ui/button.jsx";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Role Based Access Demo</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300">Use the navbar to switch roles and test protected routes.</p>
          <div className="mt-4 flex gap-3">
            <Button asChild>
              <Link to="/admin">Go to Admin</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/user">Go to User</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
