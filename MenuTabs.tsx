export default function MenuTabs() {
  return (
    <div className="flex justify-between items-center">

      <div className="flex">

        <button
          className="
          bg-[#18110d]
          text-white
          px-10
          py-4
          rounded-l-xl
          font-bold
          "
        >
          メニュー一覧
        </button>

        <button
          className="
          bg-white
          border
          px-10
          py-4
          rounded-r-xl
          font-bold
          "
        >
          販売記録
        </button>

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
        ＋ メニュー追加
      </button>

    </div>
  );
}