import React, { useState } from 'react';
import SingleColor from './SingleColor';
import Values from 'values.js';
import rgbToHex from './utils';
import './ColorGenerator.css';

const ColorGenerator = () => {
   const [color, setColor] = useState('#92E285');
   const [error, setError] = useState(false);
   const [list, setList] = useState(new Values('#1E90FF').all(10));

   const handleSubmit = (e) => {
      e.preventDefault();
      try {
         let colors = new Values(color).all(10);
         setList(colors);
      } catch (error) {
         setError(true);
         console.log(error);
      }
   };

   const randomColor = (e) => {
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      const hex = rgbToHex(red, green, blue);

      setColor(hex);
      handleSubmit(e);
   };

   return (
      <>
         <section className="container">
            <h3>color generator</h3>
            <form onSubmit={handleSubmit}>
               <input
                  type="text"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  placeholder="#92E285"
                  className={`${error ? 'error' : null}`}
               />
               <button type="submit" className="btn">
                  submit
               </button>
            </form>
            <button
               onClick={randomColor}
               style={{ marginLeft: '1rem' }}
               className="btn">
               random
            </button>
         </section>

         <section className="colors">
            {list.map((color, index) => {
               return (
                  <SingleColor
                     key={index}
                     {...color}
                     index={index}
                     hexColor={color.hex}
                  />
               );
            })}
         </section>
      </>
   );
};

export default ColorGenerator;
