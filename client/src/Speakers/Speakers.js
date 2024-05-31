import React from "react";
import { Card } from "../components/Card";
import "./Speakers.css";
import Speakerstop from "./Speakerstop";
import videoteaser from "../Assets/video-Hackathon.mp4";
import { Routes, Route } from "react-router-dom";

import { useNavigate } from "react-router-dom";
function Speakers() {
  const Navigate = useNavigate();
  const redirectToInscription = () => {
    Navigate("/Inscription");
  };

  return (
    <React.Fragment>
      <Speakerstop />
      <div className="speakers-component">
        <div className="card-speakers">
          <Card
            imgSrc="https://www.tdsconference.tn/wp-content/uploads/2023/05/samir-saied.jpg"
            imgAlt="M. SAMIR SAID"
            title="M. SAMIR SAID"
            description="MINISTRE DE L'ECONOMIE ET DE LA PLANIFICATION, TUNISIE"
          />
        </div>
        <div className="card-speakers">
          <Card
            imgSrc="https://www.tdsconference.tn/wp-content/uploads/2023/05/najla-bouden.jpg"
            imgAlt="MME NAJLA BOUDEN"
            title="MME NAJLA BOUDEN"
            description="CHEFFE DU GOUVERNEMENT, TUNISIE"
          />
        </div>
        <div className="card-speakers">
          <Card
            imgSrc="https://www.digitalsummit.tn/fr/wp-content/uploads/2023/05/mohamed-driss.jpg"
            imgAlt="Card Image 1"
            title="M. MOHAMED DRISS BEN JAMAA"
            description="SENIOR MANAGER LEAD SUR L'INDUSTRIE 4.0 , EY"
          />
        </div>
        <div className="card-speakers">
          <Card
            imgSrc="https://www.tdsconference.tn/wp-content/uploads/2023/05/gilles-bab.jpg"
            imgAlt="Card Image 1"
            title="M. GILLES BABINET "
            description="ENTREPRENEUR, CO-PRÉSIDENT DU CONSEIL NATIONAL DU NUMÉRIQUE"
          />
        </div>
        <div className="card-speakers">
          <Card
            imgSrc="https://www.tdsconference.tn/wp-content/uploads/2023/05/gilian-.jpg"
            imgAlt="Card Image 1"
            title="MME. GILLIAN LOFTS"
            description="EY GLOBAL SUSTAINABLE FINANCE LEADER"
          />
        </div>
        <div className="card-speakers">
          <Card
            imgSrc="https://www.digitalsummit.tn/fr/wp-content/uploads/2023/05/elyes-ben-rayana.jpg"
            imgAlt="Card Image 1"
            title="M. ELYES BEN RAYANA"
            description="BOARD MEMBER, / CEO, BIAT VALUE, TUNISIE"
          />
        </div>
        <div className="card-speakers">
          <Card
            imgSrc="https://www.digitalsummit.tn/fr/wp-content/uploads/2023/05/jean-paul.jpg"
            imgAlt="Card Image 1"
            title="M. JEAN-PAUL MULLER"
            description="GLOBAL PRACTICE MANAGER AI INETUM"
          />
        </div>
        <div className="card-speakers">
          <Card
            imgSrc="https://www.digitalsummit.tn/fr/wp-content/uploads/2023/05/hichem-mansour.jpg"
            imgAlt="Card Image 1"
            title="M. HICHEM MANSOUR"
            description="PRESIDENT TUNISIA ENERGY SOCIETY “TENS”"
          />
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="video-speaker-container">
     
          <video
            className="video"
            src={videoteaser}
            type="video/mp4"
            autoPlay
            loop
            muted
          ></video>
        
        <div className="text-video-speaker">
          <h1>INSCRIVEZ-VOUS DÈS MAINTENANT</h1>
          <h1 className="color">À L'EDITION 2023</h1>
          <button
            onClick={redirectToInscription}
            className="button-speaker"
            type="button"
          >
            Inscrivez vous!
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Speakers;
