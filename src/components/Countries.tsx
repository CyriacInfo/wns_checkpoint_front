import React, { SetStateAction, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Country } from "../types/Country";
import { continentAPI } from "../api/ContinentApi";
import "./countries.css";
import { useNavigate } from "react-router-dom";

const Countries = () => {
  const { continentCode } = useParams();
  const navigate = useNavigate();
  const [countriesData, setCountriesData] = useState<Country[]>();
  const [input, setInput] = useState<string>();

  const getAllCountries = async () => {
    if (continentCode) {
      const data = await continentAPI.getCountriesByContinent(continentCode);
      console.log("countries", data);
      setCountriesData(data);
    }
  };

  const goToCountry = (codePays: string) => {
    navigate(`/country/${codePays}`);
  };

  useEffect(() => {
    getAllCountries();
  }, []);
  return (
    <div className="countriesContainer">
      <h1 className="countriesTitle">Countries</h1>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <div className="cardContainer">
        {countriesData && continentCode ? (
          countriesData
            .filter((element) => {
              if (input) {
                return element.name.toLowerCase().includes(input.toLowerCase());
              }
            })

            .map((c: Country, idx: number) => (
              <div
                className="countriesCard"
                onClick={() => goToCountry(c.code)}
              >
                <p>{c.emoji}</p>
                <div className="" key={idx}>
                  {c.name}
                </div>
              </div>
            ))
        ) : (
          <div>
            <h1>Continent non trouvé</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Countries;
