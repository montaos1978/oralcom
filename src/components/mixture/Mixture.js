import { useState } from 'react';
import './Mixture.css';
import mixture from './data/data';

export default function Planets() {
  const [activePlanet, setActivePlanet] = useState(0);

  const tabButtonHandler = (planetNum) => {
    setActivePlanet(planetNum);
  };

  const tabButtons = () => {
    return (
      <div className='tabButtons1'>
        <button onClick={() => tabButtonHandler(0)} type='button'>Sieving</button> 
        <button onClick={() => tabButtonHandler(1)} type='button'>Use of Magnets</button>
        <button onClick={() => tabButtonHandler(2)} type='button'>Decantation</button>
        <button onClick={() => tabButtonHandler(3)} type='button'>Evaporation</button>
        <button onClick={() => tabButtonHandler(4)} type='button'>Sublimation</button>
        <button onClick={() => tabButtonHandler(5)} type='button'>Filtration</button>
        <button onClick={() => tabButtonHandler(6)} type='button'>Chromatography</button>
        <button onClick={() => tabButtonHandler(7)} type='button'>Distillation</button>
        <button onClick={() => tabButtonHandler(8)} type='button'>Simple Distillation</button>
        <button onClick={() => tabButtonHandler(9)} type='button'>Fractional Distillation</button>
        <button onClick={() => tabButtonHandler(10)} type='button'>Extraction</button>
        <button onClick={() => tabButtonHandler(11)} type='button'>Centrifugation</button>
      </div>
    );
  };

  const leftImages = () => {
    return (
      <div>
        {activePlanet === 0 && <img alt='sieving' className='planet' src={mixture.sieving} />}
        {activePlanet === 1 && <img alt='magnet' className='planet' src={mixture.magnet} />}
        {activePlanet === 2 && <img alt='decantation' className='planet' src={mixture.decantation} />}
        {activePlanet === 3 && <img alt='evaporation' className='planet' src={mixture.evaporation} />}
        {activePlanet === 4 && <img alt='sublimation' className='planet' src={mixture.sublimation} />}
        {activePlanet === 5 && <img alt='filtration' className='planet' src={mixture.filtration} />}
        {activePlanet === 6 && <img alt='chromatography1' className='planet' src={mixture.chromatography1} />}
        {activePlanet === 7 && <img alt='distillation1' className='planet' src={mixture.distillation1} />}
        {activePlanet === 8 && <img alt='distillation2' className='planet' src={mixture.distillation2} />}
        {activePlanet === 9 && <img alt='distillation3' className='planet' src={mixture.distillation3} />}
        {activePlanet === 10 && <img alt='extraction' className='planet' src={mixture.extraction} />}
        {activePlanet === 11 && <img alt='centrifugation' className='planet' src={mixture.centrifugation} />}
      </div>
    );
  };

  const rightDescriptions = () => {
    return (
      <div className='descriptions'>
        {activePlanet === 0 && (
          <>
            <div className='description_title'>Separating Techniques for Mixtures</div>
            <div className='description_list'>
              <ul>
                <li>Used to separate a dry mixture that contains substances of
 different sizes by passing it through a sieve, a device
 containing tiny holes. Sieve is the equipment used in sieving
 or sifting.</li>
                
              </ul>
            </div>
          </>
        )}

        {activePlanet === 1 && (
          <>
            <div className='description_title'>Separating Techniques for Mixtures</div>
            <div className='description_list'>
              <ul>
                <li>is the process of separating
 components of mixtures by
 using a magnet to attract
 magnetic materials.</li>
                
                
             </ul>
            </div>
          </>
        )}

        {activePlanet === 2 && (
          <>
            <div className='description_title'>Separating Techniques for Mixtures</div>
            <div className='description_list'>
              <ul>
                <li>It is the separation that is based on
 density. In a mixture, the more dense
 stays and the less dense get poured over.</li>
 
                
              </ul>
            </div>
          </>
        )}
        {activePlanet === 3 && (
          <>
            <div className='description_title'>Separating Techniques for Mixtures</div>
            <div className='description_list'>
              <ul>
                <li>Allowing the liquid to evaporate, leaving
                the soluble solid behind.</li>
                
              </ul>
            </div>
          </>
        )}
        {activePlanet === 4 && (
          <>
            <div className='description_title'>Separating Techniques for Mixtures</div>
            <div className='description_list'>
              <ul>
                <li>separation of a solid-solid mixture
 where one of the components
 sublimes (converts from solid
 state to gaseous state without
 forming liquid) upon heating,
 leaving 
behind 
the 
other
 components that are non
sublimable.
 </li>
 
                
              </ul>
            </div>
          </>
        )}
        {activePlanet === 5 && (
          <>
            <div className='description_title'>Separating Techniques for Mixtures</div>
            <div className='description_list'>
              <ul>
                <li>Used when separating a solid substance
 from a fluid (a liquid or a gas) by passing a
 mixture through a porous material such as a
 type of filter.
</li>
                
              </ul>
            </div>
          </>
        )}
        {activePlanet === 6 && (
          <>
            <div className='description_title'>Separating Techniques for Mixtures</div>
            <div className='description_list'>
              <ul>
                <li>separating components of a mixture
 that 
have differing adsorptive
 tendencies on a stationary phase as
 the mixture is passed over or
 through the stationary phase. It
 separates substances (dyes and
 pigments) on the basis of differences
 in solubility in a solvent.


</li>
              </ul>
            </div>
          </>
        )}
        {activePlanet === 7 && (
          <>
            <div className='description_title'>Separating Techniques for Mixtures</div>
            <div className='description_list'>
              <ul>
                <li>Separation through vaporization of a liquid from a solid, or another
 liquid, followed by vapor condensation. It is to remove dissolved
 substances from a liquid or separates a mixture of liquids that have
 different boiling points.</li>
                
              </ul>
            </div>
          </>
        )}
        {activePlanet === 8 && (
          <>
            <div className='description_title'>Separating Techniques for Mixtures</div>
            <div className='description_list'>
              <ul>
                <li> It is used when the boiling
 points of two liquids are
 significantly different from
 each other, or to separate
 liquids from non-volatile
 solid components.</li>
                
              </ul>
            </div>
          </>
        )}
        {activePlanet === 9 && (
          <>
            <div className='description_title'>Separating Techniques for Mixtures</div>
            <div className='description_list'>
              <ul>
                <li>It is used when the boiling
 points of two or more liquid
 components are close to
 each other (less than 70°C).
</li>
              </ul>
            </div>
          </>
        )}
        {activePlanet === 10 && (
          <>
            <div className='description_title'>Separating Techniques for Mixtures</div>
            <div className='description_list'>
              <ul>
                <li> removing a substance from a solid or liquid mixture by adding a
 solvent in which the substance is more soluble.
</li>
                
              </ul>
            </div>
          </>
        )}
        {activePlanet === 11 && (
          <>
            <div className='description_title'>Separating Techniques for Mixtures</div>
            <div className='description_list'>
              <ul>
                <li> It is a technique in which the
 gravitational force on a particle is
 increased significantly to affect its
 sedimentation. A method of
 separating 
molecules 
having
 different densities by spinning
 them in solution around an axis (in
 a centrifuge rotor) at high speed.</li>
              
              </ul>
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className='planets_section1' id='history2'>
      {tabButtons()}
      <div className='main1'>
        {leftImages()}
        {rightDescriptions()}
      </div>
    </div>
  );
};