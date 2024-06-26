import useMoviesContext from "../hooks/useMoviesContext";

function FilterBar() {
  const { handleGenreChange } = useMoviesContext();

  return (
    <select
      onChange={(e) => handleGenreChange(e.target.value)}
      className="select select-bordered mx-2 w-full max-w-xs"
      defaultValue="0"
    >
      <option value="0">Popular</option>
      <option value="28">Action</option>
      <option value="27">Horror</option>
      <option value="35">Comedy</option>
    </select>
  );
}

export default FilterBar;
