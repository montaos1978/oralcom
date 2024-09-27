import { useState } from 'react';
import './Banner.css'

export default function Banner() {
  const [activeSlide, setActiveSlide] = useState(0);
  const colorSlide = ['red', 'orange', 'yellow', 'green', 'blue'];

  function sliderHandler(addMinus) {
    if (addMinus === 1) {
      if (activeSlide === colorSlide.length - 1) {
        setActiveSlide(0);
      } else {
        setActiveSlide(state => state + 1);
      }
    } else {
      if (activeSlide === 0) {
        setActiveSlide(colorSlide.length - 1);
      } else {
        setActiveSlide(state => state - 1);
      }
    }
  };

  return (
    <section className='banner'>
      <button className="slide-arrow" id="slide-arrow-prev" onClick={() => sliderHandler(-1)} type='button'>&#8249;</button>
      <button className="slide-arrow" id="slide-arrow-next" onClick={() => sliderHandler(1)} type='button'>&#8250;</button>
      <ul className="slides-container">
        {colorSlide.map(function(color, index) {
          return <li className="slide" key={color + index} style={{backgroundColor: color, display: color + index === color + activeSlide ? 'block' : 'none'}}></li>;
        })}
      </ul>
      <ul className="pagination-container">
        {colorSlide.map(function(color, index) {
          return <li className='dot' key={color + index} onClick={() => setActiveSlide(index)} style={{backgroundColor: color + index === color + activeSlide ? 'black' : 'gray'}}></li>;
        })}
      </ul>
    </section>
  );
}