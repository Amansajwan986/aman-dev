import React, { useState, useEffect } from "react";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Map } from "./Component/Map";
import CountryDetails from "./Component/CountryDetails";
import SearchBar from "./Component/SearchBar";

const App = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchCountriesData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountriesData(response.data);
      } catch (error) {
        console.error("Error fetching countries data:", error);
      }
      setIsLoading(false);
    };

    fetchCountriesData();
  }, []);
  
          {/*  get Selected country data */}

  const handleCountrySelect = async (search) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${search}`
      );
      const [countryData] = response.data;
      setSelectedCountry(countryData);
    } catch (error) {
      console.error("Error fetching country data:", error);
    }
    setIsLoading(false);
  };

  return (
    <div className="container">
      <h1 className="mt-4 mb-4">World Map Application</h1>
      <div className="row">
        <div className="col-md-12">
          {/* For search country  */}
          <SearchBar
            setSearchInput={setSearchInput}
            searchInput={searchInput}
            handleCountrySelect={handleCountrySelect}
          />
        </div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {" "}
            <div className="col-md-6">
              <Map countries={countriesData} />
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              {selectedCountry ? (
                <CountryDetails country={selectedCountry} />
              ) : (
                <p>Please Search a country.</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
