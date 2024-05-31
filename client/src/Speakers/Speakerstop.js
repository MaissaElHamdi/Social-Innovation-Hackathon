import React from 'react';
import background from '../Assets/background.jpg'
import '../Agenda/Agenda.css'
function Speakerstop() {
  return (
    <React.Fragment>
      <div className='toppage-container'>
      <img className='background-agenda' src={background}></img>
  <div className='text-centered-agenda'>Speakers</div>
   </div>
    </React.Fragment>
  );
}

export default Speakerstop;