import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Louez votre logement quand vous voulez !</h3>
          <p>Email: client@example.com</p>
          <p>Téléphone: +33 1 86 76 12 82</p>
        </div>
        <div className="footer-section">
          <h3>POUR NOUS CONNAÎTRE</h3>
          <ul>
            <li><a href="#">Tarifs</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Qui sommes-nous ?</a></li>
            <li><a href="#">Nous rejoindre</a></li>
            <li><a href="#">Confidentialité</a></li>
            <li><a href="#">Mentions légales</a></li>
            <li><a href="#">Conditions d'utilisation</a></li>
            <li><a href="#">Devenez partenaire</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>BESOIN DE PLUS D'INFOS ?</h3>
          <ul>
            <li><a href="#">Foire aux questions</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Presse</a></li>
          </ul>
        </div>
        <div className="footer-socials">
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
          <FaInstagram />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
