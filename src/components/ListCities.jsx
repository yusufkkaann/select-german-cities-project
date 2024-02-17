import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function ListCities({ citiesWithSameState }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (citiesWithSameState.length > 0) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [citiesWithSameState]);
  return (
    <>
      {loading ? (
        <ClipLoader className="col-sm-8 offset-4" color="#36d7b7" />
      ) : (
        <div>
          <h3>Cities with the Same State</h3>
          <ul className="list-group">
            {citiesWithSameState.map((city, index) => (
              <li className="list-group-item" key={index}>
                {city.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
