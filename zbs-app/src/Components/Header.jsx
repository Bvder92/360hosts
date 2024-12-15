import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div id="main">
      <div className="name">
        <h2>LOUEZ VOTRE LOGEMENT</h2>
        <h1>À TOUT MOMENT !</h1>
        <p className="details">
          Gérez la location de votre logement : de l'annonce au dépôt des clés,
          jusqu'à votre retour chez vous.
        </p>
        <div className="header-btns">
          <button className="header-btn">
            <NavLink to="/selection-region">Estimez vos revenus</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
