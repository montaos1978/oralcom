import { useState } from 'react';
import './Planet1.css';
import planets from './data/data';

export default function Planets() {
  const [activePlanet, setActivePlanet] = useState(0);

  const tabButtonHandler = (planetNum) => {
    setActivePlanet(planetNum);
  };

  const tabButtons = () => {
    return (
      <div className='tabButtons6'>
        <button onClick={() => tabButtonHandler(0)} type='button'>Atomic structure</button>
        <button onClick={() => tabButtonHandler(1)} type='button'>History of the atom</button>
        <button onClick={() => tabButtonHandler(2)} type='button'>Atom</button>
        <button onClick={() => tabButtonHandler(3)} type='button'>Elements</button>
        
      </div>
    );
  };

  const leftImages = () => {
    return (
      <div>
        {activePlanet === 0 && <img alt='Atomic' className='planet' src={planets.Atomic} />}
        {activePlanet === 1 && <img alt='history' className='planet' src={planets.history} />}
        
        
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

        {activePlanet === 2 && ( 
          <>
          <div className='description_title'>Atomic structure refers to the arrangement of protons, neutrons, and electrons within an atom</div>
          <div className='description_list'>
            <ul>
              <li>•Nucleus: The dense, central part of the atom, containing protons and neutrons. Protons determine the atomic number and element identity, while neutrons contribute to the atomic mass and isotopic variation</li>
              <li>•Electron: Electrons orbit the nucleus in specific energy levels or shells. These shells are filled according to the principles of quantum mechanics, with lower-energy shells filling up before higher-energy ones.</li>
              <li>•Quantum Numbers: Electrons are described by a set of quantum numbers that define their position and energy within the atom. These include the principal quantum number (n), angular momentum quantum number (l), magnetic quantum number (m), and spin quantum number (s)</li>
              <li>•Electron Configuration: The distribution of electrons among the atom's electron shells and subshells. This configuration determines an atom's chemical properties and reactivity</li>
            </ul>
          </div>
        </>
        )}

        {activePlanet === 3 && (
          <>
           <div className='description_title'>All elements are composed of atoms, but there are elements that compost a pure substance that consists of only one type of atom. Each element is defined by its atomic number, which corresponds to the number of protons in the nucleus of its atoms</div>
           <div className='description_list'>
             <ul>
               <li>•Basic Elements: Examples include Hydrogen (H), Carbon (C), Oxygen (O), and Gold (Au). Each of these elements has unique atomic properties</li>
               <li>•Diverse Properties: Elements can be metals (like Iron (Fe)), nonmetals (like Nitrogen (N)), or metalloids (like Silicon (Si)). They have varying physical and chemical properties based on their atomic structure.</li>
               <li>•Isotopes: Atoms of the same element can have different numbers of neutrons, resulting in different isotopes. For example, Carbon-12 and Carbon-14 are isotopes of Carbon.</li>
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
        {rightDescriptions()}
      </div>
    </div>
  );
};