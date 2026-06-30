// pages/Dashboard.tsx

import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import Header from "../components/Header";
import CategoryChart from "../components/CategoryChart";


export default function Dashboard() {
  return (
    
    <div className="flex bg-[#f6f1eb]">

      <Sidebar />
       <div className="flex-1">
 <Header title="ダッシュボード" />
      <main className="flex-1 p-10">
        <h2 className="text-5xl font-bold">
          ダッシュボード
        </h2>

        <div className="grid grid-cols-4 gap-6 mt-8">
          <StatCard
            title="総品目数"
            value="27"
            description="登録済み在庫"
          />

          <StatCard
            title="在庫評価額"
            value="¥185,800"
            description="現在の推定価値"
          />

          <StatCard
            title="要発注品目"
            value="9"
            description="不足・切れ"
          />

          <StatCard
            title="充足品目"
            value="18"
            description="問題なし"
          />
        </div>

        <div className="grid grid-cols-2 gap-6 mt-8">
          <CategoryChart />
          <CategoryChart />
        </div>
      </main>
    </div>
    </div>
  );
}