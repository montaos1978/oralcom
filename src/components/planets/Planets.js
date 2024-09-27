import { useState } from 'react';
import './Planets.css';
import planets from './data/data';

export default function Planets() {
  const [activePlanet, setActivePlanet] = useState(0);

  const tabButtonHandler = (planetNum) => {
    setActivePlanet(planetNum);
  };

  const tabButtons = () => {
    return (
      <div className='tabButtons'>
        <button onClick={() => tabButtonHandler(0)} type='button'>Greek and Romans</button> 
        <button onClick={() => tabButtonHandler(1)} type='button'>Babylon and Mesopotamia</button>
        <button onClick={() => tabButtonHandler(2)} type='button'>Egyptian</button>
        <button onClick={() => tabButtonHandler(3)} type='button'>India</button>
        <button onClick={() => tabButtonHandler(4)} type='button'>Chinese</button>
        <button onClick={() => tabButtonHandler(5)} type='button'>Greece</button>
      </div>
    );
  };

  const leftImages = () => {
    return (
      <div>
        {activePlanet === 0 && <img alt='greek' className='planet' src={planets.greek} />}
        {activePlanet === 1 && <img alt='baby' className='planet' src={planets.baby} />}
        {activePlanet === 2 && <img alt='chemistry' className='planet' src={planets.chemistry} />}
        {activePlanet === 3 && <img alt='india' className='planet' src={planets.india} />}
        {activePlanet === 4 && <img alt='chinese' className='planet' src={planets.chinese} />}
        {activePlanet === 5 && <img alt='greece' className='planet' src={planets.greece} />}
      </div>
    );
  };

  const rightDescriptions = () => {
    return (
      <div className='descriptions'>
        {activePlanet === 0 && (
          <>
            <div className='description_title'>History</div>
            <div className='description_list'>
              <ul>
                <li>Ancient Greek has a large contribution in chemistry basse on their theory and
                speculations about matter.</li>
                <li>Leucippus, a notable philosopher, proposed the existence of atoms as a
 unit of atoms that cannot be seen. And Democritus enlarged this idea.
 They also believed that atoms made the universe, therefore if atoms
 weren’t around, there would be a void. The word atom was derived from
 the word Atomos implies as uncuttable.</li>
                <li>Theinfinite number was proposed by Anaxagoras for the substances that
 are really small or infinitesimally small, that were composed in the
 universe.</li>
                <li>Anaximenes believed that all things get energy from air. He also invented
 a theory called anaximenes’ theory where the matter changes due to
 rarefaction and condensation.</li>
                
              </ul>
            </div>
          </>
        )}

        {activePlanet === 1 && (
          <>
            <div className='description_title'>History</div>
            <div className='description_list'>
              <ul>
                <li> Babylon, one of the most famous cities of antiquity. It was the capital of southern Mesopotamia (Babylonia) from the early 2nd millennium to the early 1st millennium BCE (Before Current Era)</li>
                <li>The contribution of ancient mesopotamia is the symbols associated with metals
 that have heavenly bodies. They also had a technique for golds and copper to be
 able to utilize it. They were capable of making dyes, glass, paints, and perfumes.</li>
                
             </ul>
            </div>
          </>
        )}

        {activePlanet === 2 && (
          <>
            <div className='description_title'>History</div>
            <div className='description_list'>
              <ul>
                <li> Chemistry has the strongest scientific ties to the ancient Egyptians. Originating
 from the term "Kemet," which means "Black Land," the word "chemistry" alludes
 to the rich black soil that flowed from the Nile.</li>
 <li>Greek recognition of the Egyptians
 as the finest chemists in ancient history is symbolized by this appellation; it is
 also said that Egyptian chemistry was "mytho-scientific". </li>
                <li> Chemistry in ancient Egypt is well known as the experts in metallurgy, wine and
 beer making, glass making, paper manufacture, paint pigments, dyes, cosmetics,
 perfumes, and pharmaceuticals.</li>
 <li>They have skills in metal working. They were not
 able to smelt an iron, instead they had meteoric iron and they called it ‘Metal of
 Heaven’. They mastered working with copper, silver, and gold where they were
 able to produce things like gold masks, copper-alloyed 23 karat gold, with quartz
 and obsidian eyes and lapis lazuli.</li>
                
                
              </ul>
            </div>
          </>
        )}
        {activePlanet === 3 && (
          <>
            <div className='description_title'>History</div>
            <div className='description_list'>
              <ul>
                <li>India’s chemical techniques were traced back around the Harappan civilisation
 dated back to 3rd millennium BCE up to the last century Indian eminent chemist,
 Acharya Prafulla Chandra Ray (1861-1944) and a historian of chemistry.</li>
                <li>Pre-Harappan Indians were skilled with making art with baked clay pottery and
 painting with 2 or more colors too. With the study of Harappan culture it was seen
 how they were consistent with pottery using a wheel-made ware that were turned
 into different types of shapes, sizes, and colors.</li>
                <li> The colors from their pottery
 depends on the type of clay they use and some of it changes the color when they
 use the firing method for the clay to be able to harden.</li>
 <li> Glass beads were found from the 10th century BCE by archeologists in 30
 different sites; this includes the Taxila that is now a city in Pakistan, Hastinapur,
 Ahichchhatra and Kopia in Uttar Pradesh, Nalanda in Bihar, Ujjain in Madhya
 Pradesh, Nasik and Nevasa in Maharashtra, Brahmagiri in Karnataka, and
 Arikamedu at Puducherry. </li>
 
 
              </ul>
            </div>
          </>
        )}
        {activePlanet === 4 && (
          <>
            <div className='description_title'>History</div>
            <div className='description_list'>
              <ul>
                <li>Around 200 BCE in China when fireworks were invented. It all started when
 people noticed the sound of an explosion when they threw pieces of bamboo into
 the fire. These noises were believed to scare away the evil spirits. </li>
 <li>The explosion
 is formed from the hollow segment of bamboo when it was thrown into the fire
 which expands due to the heat that makes a loud cracking sound that thorns the
 bamboo apart. An alchemist tries to create a mythical substance to give a person
 an eternal life by trying to mix saltpeter commonly known as potassium nitrate,
 charcoal, and sulfur around 900 CE.</li>
                <li>In ancient China it is essential to know about the “Theory of the Five Elements.”
 These elements are the metal, wood, water, fire, and earth which they thought
 were the matters in the universe. They believed that these elements restrain and
 promote each other. Like water restrains fire, fire restrains metal, metal restrains
 wood, and wood restrains fire; and wood promotes fire, fire promotes earth, earth
 promotes metal, metal promotes water, water promotes wood. </li>
                
              </ul>
            </div>
          </>
        )}
        {activePlanet === 5 && (
          <>
            <div className='description_title'>Modern History</div>
            <div className='description_list'>
              <ul>
                <li>In ancient Greece, there's been types of matter known for 2000 years, which are fire, air, water, and earth. This type of matter was said by Aristotle. </li>
                <li>Lavoisier and his wife, and some scientists that believed in the work of Lavoisier, started an experiment to find more elements. This search helped them with 55 elements. He was also able to name these 55 elements in a systematic way. </li>
                <li>In 1660’s, an Irish philosopher, chemist, and an inventor named Robert Boyle. He was known for the gas laws he created, Boyle’s law, Charle’s law, and Avogadro’s law. Around 1644, when he studied at Geneva, taking natural philosophy, he was able to meet several scientists that made him interested in experiments on the properties of the air and the behavior of the gasses. Because of his deep interest with these experiments, he was able to invent the gas laws.  </li>
                
              </ul>
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className='planets_section' id='history1'> 
      {tabButtons()}
      <div className='main'>
        {leftImages()}
        {rightDescriptions()}
      </div>
    </div>
  );
};