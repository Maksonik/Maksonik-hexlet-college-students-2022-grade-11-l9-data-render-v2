const options = [
  {
    name: "Арбатская",
    code: "Arbat",
  },
  {
    name: "Александровский сад",
    code: "Alexanders Garden",
  },
  {
    name: "Московская",
    code: "Moscow",
  },
  {
    name: "Парк Культуры",
    code: "Culture",
  },
  {
    name: "Театральная",
    code: "Theater",
  },
];

const FilterCafes = ({ selectedSubway = "All", onChange }) => (
  <div className="controls">
    <select
      name="subway"
      id="subway"
      value={selectedSubway}
      onChange={onChange}
    >
      <option value="All">Все</option>
      {options.map((option) => (
        <option key={option.code} value={option.code}>
          {option.name}
        </option>
      ))}
    </select>
  </div>
);

export default FilterCafes;