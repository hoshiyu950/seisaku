// components/StatCard.tsx

interface Props {
  title: string;
  value: string;
  description: string;
}

export default function StatCard({
  title,
  value,
  description,
}: Props) {
  return (
    <div className="bg-white rounded-2xl border p-6">
      <p className="text-gray-500">
        {title}
      </p>

      <h2 className="text-4xl font-bold mt-4">
        {value}
      </h2>

      <p className="text-gray-400 mt-2">
        {description}
      </p>
    </div>
  );
}