import React, { useState } from 'react';
import styles from './BirthdayReminder.module.css'
import data from './data';
import List from './List';

const BirthdayReminder = () => {
   const [people, setPeople] = useState(data);

   return (
      <main>
         <section className={styles.container}>
            <h3>{people.length} birthdays today</h3>
            <List people={people} />
            <button onClick={() => setPeople([])}>clear all</button>
         </section>
      </main>
   );
};

export default BirthdayReminder;
