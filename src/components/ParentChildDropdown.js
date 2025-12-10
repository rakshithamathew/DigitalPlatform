import React, { useEffect, useState } from "react";

export const ParentChildDropdown = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [cities, setCities] = useState([]);

  const ParentChildDropdown = async () => {
    const response = await fetch(
      "https://countriesnow.space/api/v0.1/countries"
    );
    const data = await response.json();
    const country = data.data.map((item) => item.country);
    setCountries(country);
    console.log(data);

    const selectedCountryData = data.data.find(
      (item) => item.country === selectedCountry
    );
    if (selectedCountryData) {
      setCities(selectedCountryData.cities);
    }
    console.log(cities);

  };


  useEffect(() => {
    ParentChildDropdown();
  }, [ selectedCountry]);

  return (
    <div>
      <h2>Parent Child Dropdown</h2>
      <br />
      <select onChange={(e) => setSelectedCountry(e.target.value)}>
        <option>Select Country</option>
        {countries.map((item) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>

      <select>
        <option>Select City</option>
        {cities.map((item) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
      
    </div>
  );
};
