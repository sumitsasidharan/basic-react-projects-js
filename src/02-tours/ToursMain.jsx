import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import './Tours.css';

const url = 'https://course-api.com/react-tours-project';

const ToursMain = () => {
   const [loading, setLoading] = useState(false);
   const [tours, setTours] = useState([]);

   const removeTour = (tourId) => {
      const newTours = tours.filter(tour => tour.id !== tourId);
      setTours(newTours);
   }

   const fetchTours = async () => {
      setLoading(true);

      try {
         const response = await fetch(url);
         const tours = await response.json();

         setLoading(false);
         setTours(tours);
      } catch (error) {
         setLoading(false);
         console.log(error);
      }
   };

   useEffect(() => {
      fetchTours();
   }, []);

   if (loading) {
      return (
         <main>
            <Loading />
         </main>
      );
   }

   if (tours.length === 0) {
      return (
         <main>
            <div className="title">
               <h2>no tours left</h2>
               <button className='btn' onClick={fetchTours} >Refresh</button>
            </div>
         </main>
      )
   }

   return (
      <main>
         <Tours tours={tours} removeTour={removeTour} />
      </main>
   );
};

export default ToursMain;

// https://course-api.com/react-tours-project
