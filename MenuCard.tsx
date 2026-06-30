interface MenuCardProps {
  category: string;
  name: string;
  price: number;
  status: "available" | "unavailable";
  max?: number;
  warning?: string;
}

export default function MenuCard({
  category,
  name,
  price,
  status,
  max,
  warning,
}: MenuCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow border overflow-hidden">

      <div className="flex justify-between p-8">

        <div>

          <span className="bg-[#f4efe7] px-3 py-1 rounded text-sm">
            {category}
          </span>

          <h2 className="text-4xl font-bold mt-4">
            {name}
          </h2>

          <p className="text-gray-500 text-2xl mt-2">
            ¥{price}
          </p>

          {warning && (
            <div className="bg-red-50 text-red-600 rounded-xl p-4 mt-6">
              {warning}
            </div>
          )}

        </div>

        <div>

          {status === "available" ? (
            <div className="bg-green-100 text-green-700 px-4 py-2 rounded-xl">
              ✓ 提供可能
            </div>
          ) : (
            <div className="bg-red-100 text-red-600 px-4 py-2 rounded-xl">
              ✕ 提供不可
            </div>
          )}

          {max && (
            <p className="text-gray-500 text-right mt-3">
              最大 {max} 食分
            </p>
          )}

        </div>

      </div>

      <div className="px-8 pb-6 pt-2">
        ▼ 使用食材（1品）
      </div>

      <div className="border-t bg-[#f8f3eb] p-5 flex justify-end gap-8">

        <button>
          ✏ 編集
        </button>

        <button className="text-red-500">
          🗑 削除
        </button>

      </div>

    </div>
  );
}