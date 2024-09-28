import { useState } from 'react';
import './Footer.css';
import planets from './data/data';

export default function Planets() {
  const [activePlanet, setActivePlanet] = useState(0);

  const tabButtonHandler = (planetNum) => {
    setActivePlanet(planetNum);
  };

  const tabButtons = () => {
    return (
      <div className='tabButtons5'>
        <button onClick={() => tabButtonHandler(0)} type='button'>Video 1</button>
        <button onClick={() => tabButtonHandler(1)} type='button'>Video 2</button>
        
        
      </div>
    );
  };

  const leftImages = () => {
    return (
      <div className='Mabel1'>
         {activePlanet === 0 && (
          <>
            <div className='Mabel2'>Measurement 1
           </div>
            <div className='Mabel3'>
                 <video src="Video1.mp4" type="video/mp4">  </video>
            </div>
          </>
        )}

{activePlanet === 1 && (
          <>
            <div className='Mabel2'>Measurement 2
           </div>
            <div className='Mabel3'>
                 <video src="Video1.mp4" type="video/mp4">  </video>
            </div>
          </>
        )}
        
      </div>
    );
  };

  const rightDescriptions = () => {
    return (
      <div className='descriptions'>
        {activePlanet === 0 && (
          <>
            <div className='description_title'>Atomic Structure</div>
            <div className='description_list'>
              <ul>
                <li>•Atoms consist of an extremely small, positively charged nucleus surrounded by a cloud of negatively charged electrons.</li>
                <li>•An atom is a complex arrangement of negatively charged electrons arranged in defined shells about a positively charged nucleus. This nucleus contains most of the atom's mass and is composed of protons and neutrons.</li>
                <li>•Atomic structure refers to an atom's nucleus/core containing: protons which is positively charged, and neutrons that is neutrally charged.</li>
                <li>•All atoms are roughly the same size. A convenient unit of length for measuring atomic sizes is the angstrom (Å), which is defined as: -10 meters. The diameter of an atom is approximately 2-3 Å</li>
              </ul>
            </div>
          </>
        )}

        {activePlanet === 1 && (
          <>
            <div className='description_title'>Short brief History of Atom</div>
            <div className='description_list'>
              <ul>
                <li>We human strive in curiosity — and thanks to our dedicated philosophers and scientist that provided us theories and studies even with the lack of advance technologies they don't have the privilege to— our ideas about the nature of atoms have progressed over the centuries and continues to develop till this day of age.</li>
                <li>•*John Dalton* introduced a new form of the ancient Greek idea of atoms at the beginning of the nineteenth century. He stated that all matter is made up of atoms and that atoms make up elements and compounds. He believed atoms could not be split but that was later disproved</li>
                <li>•*J.J. Thomson* He observed an experiment using cathode rays in a vacuum to discover the presence of electrons and suggested the plum pudding model of the atom In 1897.</li>
                <li>•*Ernest Rutherford*  He discovered that atoms are composed of a very dense nucleus with lots of empty space through the gold foil experiment.  His model suggested that electrons orbit the atomic nucleus like planets round the Sun In 1911.</li>
              </ul>
            </div>
          </>
        )} 

       
        
      </div>
    );
  };

  return (
    <div className='planets_section' id='history5'>
      {tabButtons()}
      <div className='main'>
        {leftImages()}
       
      </div>
    </div>
  );
};