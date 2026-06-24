// components/CategoryChart.tsx

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "食材", value: 82000 },
  { name: "酒類", value: 88000 },
  { name: "消耗品", value: 12000 },
];

export default function CategoryChart() {
  return (
    <div className="bg-white rounded-2xl border p-6">
      <h3 className="font-bold text-xl mb-4">
        カテゴリ別 在庫評価額
      </h3>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            dataKey="value"
            fill="#c57a2a"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}