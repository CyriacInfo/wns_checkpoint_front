import { useEffect, useState } from "react";
import { continentAPI } from "../api/ContinentApi";
import { Continent } from "../types/Continent";
import "./continents.css";
import { useNavigate } from "react-router-dom";

const Continents = () => {
  const [continentsData, setContinentsData] = useState<Continent[]>();
  const navigate = useNavigate();
  const getAllContinents = async () => {
    const data = await continentAPI.getAll();
    setContinentsData(data);
  };

  const goCountries = (codeContinent: string) => {
    navigate(`/countries/${codeContinent}`);
  };

  useEffect(() => {
    getAllContinents();
  }, []);
  return (
    <div className="continentsContainer">
      {continentsData &&
        continentsData.map((c: Continent, idx: number) => (
          <div className="continentTile" key={idx} onClick={()=> goCountries(c.code)}>
            {c.name}
          </div>
        ))}
    </div>
  );
};

export default Continents;
