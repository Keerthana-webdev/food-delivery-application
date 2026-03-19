function SearchBar({ search, setSearch }) {
  return (
    <div className="flex justify-center mt-6">
      <input
        type="text"
        placeholder="Search restaurants..."
        className="border p-2 rounded-lg w-80 shadow"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;