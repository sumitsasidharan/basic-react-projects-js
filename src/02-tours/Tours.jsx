import React, { useEffect, useState } from 'react'
import Tour from './Tour';

import './Tours.css';

const url = 'https://course-api.com/react-tours-project';

const Tours = ({ tours, removeTour }) => {
   return (
      <section>
         <div className="title">
            <h2>Our Tours</h2>
            <div className="underline"></div>
         </div>

         <div>
            {tours.map((tour) => {
               return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
            })}
         </div>
      </section>
   );
};

export default Tours

// https://course-api.com/react-tours-project