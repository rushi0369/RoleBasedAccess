import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card.jsx";

export default function UserPage() {
  return (
    <div className="mx-auto max-w-5xl p-6">
      <Card>
        <CardHeader>
          <CardTitle>User Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300">Only users can view this page.</p>
        </CardContent>
      </Card>
    </div>
  );
}
