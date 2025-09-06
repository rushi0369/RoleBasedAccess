export function Card({ className = "", ...props }) {
  return (
    <div className={`rounded-lg border border-gray-200 bg-white shadow-sm dark:bg-gray-900 dark:border-gray-800 ${className}`} {...props} />
  );
}

export function CardHeader({ className = "", ...props }) {
  return <div className={`p-4 border-b border-gray-200 dark:border-gray-800 ${className}`} {...props} />;
}

export function CardContent({ className = "", ...props }) {
  return <div className={`p-4 ${className}`} {...props} />;
}

export function CardTitle({ className = "", ...props }) {
  return <h3 className={`text-lg font-semibold leading-none tracking-tight ${className}`} {...props} />;
}
