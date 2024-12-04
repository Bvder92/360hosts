import React from 'react';

function Pricing() {
  const services = [
    {
      category: 'Onboarding',
      items: [
        'Équipe de gestionnaire de compte dédiée',
        'Vérification du logement en personne',
        'Photographie professionnelle',
        'Mise en place du tableau de bord du propriétaire',
      ],
    },
    {
      category: 'Gestion des annonces',
      items: [
        'Création et optimisation d’annonces',
        'Gestion du calendrier',
        'Tarification dynamique',
        'Gestion des paiements',
      ],
    },
    {
      category: 'Services aux voyageurs',
      items: [
        'Gestion et communication avec les voyageurs',
        'Check-in assisté',
      ],
    },
    {
      category: 'Services',
      items: [
        'Ménage professionnel',
        'Literie et serviettes de qualité supérieure',
        'Articles de toilette premium (supplément)',
        'Gestion de l’entretien',
      ],
    },
    {
      category: 'Sécurité',
      items: [
        'Vérification de l’identité du client (carte d’identité et profil)',
      ],
    },
  ];

  return (
    <section id="pricing">
      <div className="pricing-container">
        <div className="pricing-intro">
          <h1>Tarification à partir de</h1>
          <div className="pricing-details">
            <div className="highlight-box">
              <h2>15%</h2>
              <p>des revenus locatifs générés</p>
            </div>
            <p className="tarification-details">
              La commission dépend du profil de votre bien et de sa localisation.
              Ce tarif inclut la gestion complète de votre propriété par notre équipe experte.
            </p>
            <button className="cta-button">Obtenez un devis</button>
          </div>
        </div>
        <div className="intro">
          <h1>Nos Services Complets</h1>
          <p>
            Découvrez l'ensemble des prestations que nous proposons pour une gestion optimale et sereine de votre bien locatif.
          </p>
        </div>
        <div className="services-list">
          {services.map((service, index) => (
            <div key={index} className="service-category">
              <h2>{service.category}</h2>
              <ul>
                {service.items.map((item, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
