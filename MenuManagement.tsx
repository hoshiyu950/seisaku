import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MenuTabs from "../components/MenuTabs";
import CategoryFilter from "../components/CategoryFilter";
import MenuCard from "../components/MenuCard";
export default function MenuManagement() {
  return (
    <div className="flex min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Header title="メニュー管理" />

        <main className="bg-[#f6f1eb] p-12">

          <h2 className="text-5xl font-bold mb-10">
            メニュー管理
          </h2>

          <MenuTabs />

          <CategoryFilter />
<div className="mt-8 space-y-6">
  <MenuCard
    category="焼き物"
    name="焼き鳥（もも）"
    price={180}
    status="available"
    max={30}
  />

  <MenuCard
    category="焼き物"
    name="豚バラ串"
    price={160}
    status="unavailable"
    warning="豚バラ肉：在庫0kg / 必要0.08kg"
  />
</div>
        </main>

      </div>

    </div>
  );
}