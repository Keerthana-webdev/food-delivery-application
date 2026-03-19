function CategoryFilter({ setCategory }) {
  return (
    <div className="flex justify-center gap-4 mt-4">
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => setCategory("All")}
      >
        All
      </button>

      <button
        className="bg-gray-200 px-4 py-2 rounded"
        onClick={() => setCategory("Pizza")}
      >
        Pizza
      </button>

      <button
        className="bg-gray-200 px-4 py-2 rounded"
        onClick={() => setCategory("Burgers")}
      >
        Burgers
      </button>

      <button
        className="bg-gray-200 px-4 py-2 rounded"
        onClick={() => setCategory("Indian")}
      >
        Indian
      </button>
    </div>
  );
}

export default CategoryFilter;