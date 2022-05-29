import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Sidebar from './Sidebar';
import Submenu from './Submenu';
import './StripeMenuApp.css';

function StripeMenuApp() {
   return (
      <>
         <Navbar />
         <Sidebar />
         <Hero />
         <Submenu />
      </>
   );
}

export default StripeMenuApp;
