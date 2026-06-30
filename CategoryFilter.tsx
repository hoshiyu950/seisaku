const categories = [
  "すべて",
  "焼き物",
  "刺身・海鮮",
  "おつまみ",
  "ドリンク",
];

export default function CategoryFilter() {
  return (
    <div className="flex gap-4 mt-8">

      {categories.map((category, index) => (

        <button
          key={category}
          className={`
            px-8
            py-3
            rounded-xl
            border

            ${
              index === 0
                ? "bg-[#18110d] text-white"
                : "bg-white"
            }
          `}
        >
          {category}
        </button>

      ))}

    </div>
  );
}