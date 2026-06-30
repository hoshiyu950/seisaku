import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import PrepStatsCard from "../components/PrepStatsCard";
import PrepCategory from "../components/PrepCategory";
import EmptyPrepStock from "../components/EmptyPrepStock";

export default function PrepStock() {
  return (
    <div className="flex min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Header title="作り置き在庫" />

        <main className="bg-[#f6f1eb] p-12">

          <div className="flex justify-between items-center">

            <div>

              <h2 className="text-5xl font-bold">
                作り置き在庫
              </h2>

              <p className="text-gray-500 mt-3">
                調理済み品の在庫・消費期限を管理します
              </p>

            </div>

            <button
              className="
              bg-[#c57a2a]
              text-white
              px-8
              py-4
              rounded-xl
              font-bold
              "
            >
              ＋ 作り置きを登録
            </button>

          </div>

          <div className="grid grid-cols-4 gap-6 mt-10">

            <PrepStatsCard
              title="登録品目数"
              value="0"
              unit="品目"
            />

            <PrepStatsCard
              title="総ポーション数"
              value="0"
              unit="食分"
            />

            <PrepStatsCard
              title="期限切れ・本日期限"
              value="0"
              unit="品目"
            />

            <PrepStatsCard
              title="期限3日以内"
              value="0"
              unit="品目"
            />

          </div>

          <div className="mt-8">

            <PrepCategory />

          </div>

          <div className="mt-8">

            <EmptyPrepStock />

          </div>

        </main>

      </div>

    </div>
  );
}