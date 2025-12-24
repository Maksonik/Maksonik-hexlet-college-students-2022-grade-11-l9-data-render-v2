import { useEffect, useState } from "react";
import FilterCafes from "./FilterCafes.jsx";

const placeholderImg = "https://via.placeholder.com/150";

const CafesTable = () => {
  const [cafes, setCafes] = useState([]);
  const [selectedSubway, setSelectedSubway] = useState("All");

  useEffect(() => {
    const fetchCafes = async () => {
      const response = await fetch("/cafes");
      const data = await response.json();
      setCafes(data.cafes);
    };

    fetchCafes();
  }, []);

  const handleSubwayChange = (event) => {
    setSelectedSubway(event.target.value);
  };

  const filteredCafes =
    selectedSubway === "All"
      ? cafes
      : cafes.filter((cafe) => cafe.subwayCode === selectedSubway);

  return (
    <div className="cafesTable">
      <FilterCafes
        selectedSubway={selectedSubway}
        onChange={handleSubwayChange}
      />
      <ul className="cardsList">
        {filteredCafes.map((cafe) => {
          const imgSrc = cafe.img || placeholderImg;
          return (
            <li className="card" key={cafe.id}>
              <img src={imgSrc} alt="" />
              <h2>{cafe.name}</h2>
              <p>{cafe.desc}</p>
              <p>{cafe.address}</p>
              <p>Subway: {cafe.subwayCode}</p>
              <p>{cafe.workTime}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};


export default CafesTable;