


import React from 'react';
import './Footer.css';
import image from "../Assets/logo.png";

function Footer()  {
  return (
    
    <div className="footer">
   
      <div className="footer-container">
        <div className="footer-content">
          <img className='logo' src={image} ></img>
          <p className='conf'>INTELART : l'IT en mode artistique !</p>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: interat@gmail.com</p>
          <p>Téléphone: +216 00 000 000</p>
          <p>Adresse: Tunis,Tunisie</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 INTELART. Tous droits réservés.</p>
        
      </div>
    </div>
  );
}

export default Footer;