type TFilterBarProps = {
  handleGenreChange: (n: string) => void;
};

function FilterBar({ handleGenreChange }: TFilterBarProps) {
  return (
    <select
      onChange={(e) => handleGenreChange(e.target.value)}
      className="select select-bordered mx-2 w-full max-w-xs"
    >
      <option disabled selected>
        Genre
      </option>
      <option value="0">Popular</option>
      <option value="28">Action</option>
      <option value="27">Horror</option>
      <option value="35">Comedy</option>
    </select>
  );
}

export default FilterBar;
