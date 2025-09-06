import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card.jsx";

export default function Admin() {
  return (
    <div className="mx-auto max-w-5xl p-6">
      <Card>
        <CardHeader>
          <CardTitle>Admin Panel</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300">Only admins can view this page.</p>
        </CardContent>
      </Card>
    </div>
  );
}
