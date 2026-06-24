
import {
  
  LayoutDashboard,
  BookOpen,
  Package,
  Wine,
  ShoppingCart,
  Bell,
  Settings,
} from "lucide-react";

const menus = [
  { icon: LayoutDashboard, label: "ダッシュボード" },
  { icon: BookOpen, label: "メニュー管理" },
  { icon: Package, label: "食材" },
  { icon: Wine, label: "酒類" },
  { icon: ShoppingCart, label: "発注管理" },
  { icon: Bell, label: "アラート" },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-[#18110d] text-white h-screen relative">
      {/* ロゴ */}
      <div className="p-8 border-b border-[#2d1e14]">
        <h1 className="text-2xl font-bold">
          居酒屋
        </h1>

        <h2 className="text-sm text-gray-400">
          INVENTORY SYSTEM
        </h2>
      </div>

      {/* メニュー */}
      <nav className="space-y-2 px-4 mt-6">
        {menus.map((menu) => (
          <button
            key={menu.label}
            className="
              flex items-center
              gap-3
              w-full
              p-4
              rounded-xl

              hover:bg-[#2a1d15]
              hover:-translate-y-1
              hover:shadow-lg

              transition-all
              duration-200
            "
          >
            <menu.icon size={20} />
            {menu.label}
          </button>
        ))}
      </nav>

      {/* 設定 */}
      <div className="absolute bottom-5 left-4">
        <button
          className="
            flex items-center
            gap-2
            p-3
            rounded-xl

            hover:bg-[#2a1d15]
            hover:-translate-y-1

            transition-all
            duration-200
          "
        >
          <Settings />
          設定
        </button>
      </div>
    </aside>
  );
}