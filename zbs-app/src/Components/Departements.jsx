import React from "react";
import { useNavigate } from "react-router-dom";
import { regions } from "../data/regions";
import BackButton from "./BackButton";

function Departements() {
  const navigate = useNavigate();

  const handleDepartementClick = (departement) => {
    navigate(`/contact/${regions[0].name}/${departement}`);
  };

  return (
    <div>
      <div className="selection-region-container">
        <h1>Choisir un département en {regions[0].name}</h1>
        <div className="region-grid">
          {regions[0].departments.map((department) => (
            <div
              key={department}
              className="region-card"
              onClick={() => handleDepartementClick(department)}
            >
              {department}
            </div>
          ))}
        </div>
        <BackButton />
      </div>
    </div>
  );
}

export default Departements;
