import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Country } from "../types/Country";
import { countryAPI } from "../api/CountryApi";
import "./countryData.css";

const CountryData = () => {
  const { codePays } = useParams();
  const [countryData, setCountryData] = useState<Country>();

  const getCountryInfo = async () => {
    if (codePays) {
      const data = await countryAPI.getCountryByCodePays(codePays);
      setCountryData(data);
    }
  };

  useEffect(() => {
    getCountryInfo();
  }, []);
  return (
    <div className="countryContainer">
      {countryData && (
        <div className="countryTile">
          <h1 className="countryName">{countryData.name}</h1>
          <p className="countryFLag">{countryData.emoji}</p>
          <ul className="countryList">
            <li>Currency: {countryData.currency}</li>
            <li>Capital: {countryData.capital}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CountryData;
