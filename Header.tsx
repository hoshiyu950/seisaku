interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const today = new Date();

  const date = today.toLocaleDateString("ja-JP");

  return (
    <header className="bg-white border-b border-[#ddd] px-12 py-8 flex justify-between items-center">

      <div>
        <h1 className="text-5xl font-bold">
          {title}
        </h1>

        <p className="text-gray-500 mt-2">
          居酒屋 在庫管理システム
        </p>
      </div>

      <div className="flex items-center gap-6">

        <div className="border border-red-300 rounded-xl px-6 py-3 bg-red-50 text-red-600 font-bold">
          ● 要発注 9件
        </div>

        <p className="text-gray-500">
          {date}
        </p>

      </div>

    </header>
  );
}
