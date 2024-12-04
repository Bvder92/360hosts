import React from 'react';
import BackgroundImage from '../images/about1.jpg'; 

function About() {
  return (
    <section id="about">
      <div className="about-text">
        <h1>Nous veillons à ce que chaque séjour soit un pur plaisir</h1>
        <p>Zsb Agency, votre conciergerie de confiance pour la location saisonnière, propose une gestion intégrale pour les locations de courte et moyenne durée. Notre équipe s'engage à fournir un service exceptionnel, tant pour les propriétaires que pour les voyageurs, en s'assurant que chaque séjour soit mémorable. Si vous possédez un bien et envisagez de le louer, laissez-nous prendre les rênes : nous gérons tout de A à Z et maximisons vos revenus grâce à notre expertise et nos outils technologiques avancés. Avec Zsb Agency, valorisez votre propriété et découvrez une gestion de location sans souci.</p>
      </div>
      <div className="about-image">
        <img src={BackgroundImage} alt="Vue de la ville avec la Tour Eiffel" />
      </div>
    </section>
  );
}

export default About;
