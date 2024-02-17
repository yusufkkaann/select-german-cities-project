import React, { useState } from "react";
import useAxiosCities from "../customHooks/useAxiosCities";
import ListCities from "./ListCities";

export default function SelectMenu() {
  const [options] = useAxiosCities();

  const [selectedCity, setSelectedCity] = useState(null);
  const [citiesWithSameState, setCitiesWithSameState] = useState([]);

  const handleChange = (e) => {
    const selectedState = e.target.value;

    // Tüm şehirleri içeren options array'inden aynı state'e sahip olanları filtrele
    const filteredCities = options.filter(
      (option) => option.state === selectedState
    );
    // Seçilen şehiri belirle ve state'i aynı olan şehirleri setCitiesWithSameState ile ayarla
    const selectedCity = options.find(
      (option) => option.state === selectedState
    );
    // console.log(selectedCity);
    // console.log("filtered", filteredCities);
    setSelectedCity(selectedCity);
    setCitiesWithSameState(filteredCities);
  };

  const handleCopy = () => {
    if (citiesWithSameState.length > 0) {
      // citiesWithSameState içindeki tüm şehirlerin isimlerini bir dize içinde birleştir
      const cityNamesString = citiesWithSameState
        .map((city) => city.name)
        .join(", ");

      // Birleştirilmiş diziyi panoya kopyala
      navigator.clipboard
        .writeText(cityNamesString)
        .then(() => {
          alert("Copied to clipboard");
        })
        .catch((error) => {
          console.error("Error copying to clipboard:", error);
        });
    }
  };

  return (
    <div className="col-sm-8 offset-2 ">
      <h2>Eyalet Seçiniz</h2>
      <div className="mb-3" style={{ display: "flex", gap: "10px" }}>
        <select
          onChange={handleChange}
          className="form-select"
          aria-label="Default select example"
        >
          <option value="0">Eyaletler</option>
          {options.map((option, index) => (
            <option key={index} value={option.state}>
              {option.state}
            </option>
          ))}
        </select>

        <button onClick={handleCopy} type="button" className="btn btn-success">
          Copy
        </button>
      </div>

      <div>
        {selectedCity && (
          <div>
            <p>
              {selectedCity.state} eyaletinde {citiesWithSameState.length} adet
              şehir var.
            </p>
          </div>
        )}
      </div>
      <ListCities citiesWithSameState={citiesWithSameState} />
    </div>
  );
}
