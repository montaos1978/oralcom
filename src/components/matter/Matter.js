import { useState } from 'react';
import './Matter.css';
import matter from './data/data';

export default function Planets() {
  const [activePlanet, setActivePlanet] = useState(0);

  const tabButtonHandler = (planetNum) => {
    setActivePlanet(planetNum);
  };

  const tabButtons = () => {
    return (
      <div className='tabButtons2'>
        <button onClick={() => tabButtonHandler(0)} type='button'>Particulate Nature of Matter</button> 
        <button onClick={() => tabButtonHandler(1)} type='button'>Phase Change</button>
        <button onClick={() => tabButtonHandler(2)} type='button'>Substance and Mixture</button>
        <button onClick={() => tabButtonHandler(3)} type='button'>Elements and Compounds </button>
        <button onClick={() => tabButtonHandler(4)} type='button'>Physical and Chemical Properties of Matter</button>
       
      </div>
    );
  };

  const leftImages = () => {
    return (
      <div>
        {activePlanet === 0 && <img alt='SOLID' className='planet' src={matter.SOLID} />}
        {activePlanet === 1 && <img alt='PHASECHANGE' className='planet' src={matter.PHASESCHANGE} />}
        {activePlanet === 2 && <img alt='LIQUID' className='planet' src={matter.LIQUID} />}
        {activePlanet === 3 && <img alt='GAS' className='planet' src={matter.GAS} />}
        {activePlanet === 4 && <img alt='BOYLES' className='planet' src={matter.BOYLES} />}
        
      </div>
    );
  };

  const rightDescriptions = () => {
    return (
      <div className='descriptions'>
        {activePlanet === 0 && (
          <>
            <div className='description_title'>State of Matter</div>
            <div className='description_list'>
              <ul>
                <li>According to DEMOCRITUS 
                "Atomos are small, indivisible particles that make up matter.</li>
                <li>STATE OF MATTER
                Inter-convertibility depends on pressure and temperature.</li>
                <li>SOLID
Macroscopic view - a solid has definite volume and shape
Microscopic view - particles are very closely packed together.</li>
<li>LIQUID 
Macroscopic view - a liquid has a definite volume. However, its shape is indefinite.
Microscopic view - particles are slightly loose.</li>
<li>GAS
Macroscopic view - both shape and volume are indefinite 
Microscopic view - particles are far from each other.</li>
              
              </ul>
            </div>
          </>
        )}

        {activePlanet === 1 && (
          <>
            <div className='description_title'>Particulate Nature of Matter</div>
            <div className='description_list'>
              <ul>
                <li>• GAS will undergo condensation and turn into a LIQUID if the temperature decreases.</li>
                <li>•LIQUID with turn into a SOLID if the temperature decreases.</li>
                <li>• on the other hand, If the temperature increases, SOLID will turn into a GAS
Ex. water turning into water vapor as it boils.</li>
                
             </ul>
            </div>
          </>
        )}

        {activePlanet === 2 && (
          <>
            <div className='description_title'>Particulate Nature of Matter</div>
            <div className='description_list'>
              <ul>
                <li>Substance - Definite or constant composition and distinct properties.
Ex. Water, salt, and carbon dioxide

Mixture - A combination of two or more substances in which the substance retains its distinct properties. It does not have a constant composition.</li>
 <li>•Homogeneous mixture - The composition of the mixture is the same throughout the solution. </li>
                <li>•Heterogeneous mixture - The composition is not uniform.</li>
                
              </ul>
            </div>
          </>
        )}
        {activePlanet === 3 && (
          <>
            <div className='description_title'>Particulate Nature of Matter </div>
            <div className='description_list'>
              <ul>
                <li>Elements - The elements that cannot be destroyed into simpler elements by chemical means are constituted of only one type of atom.</li>
                <li>Compound - A compound contains two or more elements chemically combined in definite ratios. It can be broken up only by chemical means to its pure components.</li>
                
              </ul>
            </div>
          </>
        )}
        {activePlanet === 4 && (
          <>
            <div className='description_title'>Particulate Nature of Matter</div>
            <div className='description_list'>
              <ul>
                <li>Physical properties of matter - It includes color, hardness, malleability, solubility, electrical conductivity, density, melting point, and boiling point.
                </li>
 <li>Chemical properties of matter - Attributes that can only be measured or observed as matter changes into a specific kind of matter. Some examples include reactivity, flammability, and ability to rust.</li>
                
                
              </ul>
            </div>
          </>
        )}
        
      </div>
    );
  };

  return (
    <div className='planets_section2' id='history3'>
      {tabButtons()}
      <div className='main2'>
        {leftImages()}
        {rightDescriptions()}
      </div>
    </div>
  );
};