import React from 'react';
import { Link } from 'react-router-dom';

function WhyChoose() {
  return (
    <section id="why-choose">
      <h1>Pourquoi choisir ZSB Agency ?</h1>
      <p className="intro-text">
        Découvrez pourquoi ZSB Agency est le partenaire idéal pour maximiser vos revenus locatifs tout en simplifiant la gestion de vos biens.
      </p>
      <div className="features">
        <div className="feature">
          <img
            src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/external-solution-business-management-justicon-lineal-color-justicon-1.png"
            alt="Gestion complète"
          />
          <h2>Une gestion complète</h2>
          <p>
            Nous nous occupons de tous les aspects de la gestion de vos biens : de la création des annonces à la relation avec les voyageurs.
          </p>
          <button className="feature-button">En savoir plus</button>
        </div>
        <div className="feature">
          <img
            src="https://img.icons8.com/color/60/growing-money.png"
            alt="Optimisation de vos revenus"
          />
          <h2>Optimisation de vos revenus</h2>
          <p>
            Bénéficiez d'une expertise dédiée pour augmenter vos revenus locatifs. Jusqu'à 60% d'optimisation possible grâce à nos solutions.
          </p>
          <Link to="/pricing" className="feature-button">
            Découvrez nos tarifs
          </Link>
        </div>
        <div className="feature">
          <img
            src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-relax-vacation-planning-solo-trip-flaticons-flat-flat-icons-2.png"
            alt="Gestion simplifiée"
          />
          <h2>Gestion simplifiée</h2>
          <p>
            Grâce à notre technologie avancée, suivez vos performances en temps réel et simplifiez chaque étape de la gestion locative.
          </p>
          <button className="feature-button">Commencez dès aujourd'hui</button>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
