type TFilterBarProps = {
  handleGenre: (n: number) => void;
};

function FilterBar({ handleGenre }: TFilterBarProps) {
  const handleChange = (genre: string) => {
    const genreId = Number(genre);
    handleGenre(genreId);
  };

  return (
    <select
      onChange={(e) => handleChange(e.target.value)}
      className="select select-bordered w-full max-w-xs"
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
