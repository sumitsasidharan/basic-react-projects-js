import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

import './AccordionApp.css';

function AccordionApp() {
   const [questions, setQuestions] = useState(data);

   return (
      <main>
         <div className="container">
            <h1>QnA about Login</h1>
            <section className="info">
               {
                  questions.map((question) => {
                     return <SingleQuestion key={question.id} {...question} />
                  })
               }
            </section>
         </div>
      </main>
   )
}

export default AccordionApp;
