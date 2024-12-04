import React from 'react';
import Featuresbox from './Featuresbox';
import fimage1 from '../images/1.svg';
import fimage2 from '../images/2.svg';
import fimage3 from '../images/3.svg';
import fimage4 from '../images/4.svg';
import airbnb from '../images/airbnb.png';
import booking from '../images/booking.png';

function Features() {
  return (
    <div id='features'>
        <h1>Service complet de gestion de location</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam architecto esse.</p>
        <div className='a-container'>
            <Featuresbox image={fimage1} title="Gestion en ligne"/>
            <Featuresbox image={fimage2} title="Gestion des voyageurs"/>
            <Featuresbox image={fimage3} title="Gestion du bien"/>
            <Featuresbox image={fimage4} title="Promotion du bien"/>
        </div>

      {/* Ajout de la bande sous les features */}
      <div className="reservation-platforms">
        <p>Multiples plateformes de réservation</p>
        <div className="logos">
          <img src={airbnb} alt="Airbnb" className="platform-logo" />
          <img src={booking} alt="Booking" className="platform-logo" />
        </div>
      </div>

    </div>
  )
}

export default Features;